const express = require("express")
const path = require("path")

const app = express()

// Parse JSON dans les requêtes POST
app.use(express.json())

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, "public")))

// Stockage temporaire des utilisateurs et stats
let users = []
let logins = 0

// Route POST pour créer un compte
app.post("/register", (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ error: "Username et password requis" })
    }

    // Vérifie si l'utilisateur existe déjà
    if (users.find(u => u.username === username)) {
        return res.status(409).json({ error: "Utilisateur déjà existant" })
    }

    users.push({ username, password })
    res.sendStatus(200)
})

// Route POST pour se connecter
app.post("/login", (req, res) => {
    const { username, password } = req.body

    const user = users.find(u => u.username === username && u.password === password)

    if (!user) return res.sendStatus(403)

    logins++
    res.sendStatus(200)
})

// Route pour voir les stats
app.get("/stats", (req, res) => {
    res.json({
        users: users.length,
        logins: logins
    })
})

// Redirection de base vers index.html si on est sur la racine
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

// Démarrage du serveur
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})