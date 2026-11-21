# 🚀 Déploiement — changement des fichiers sur GitHub Pages

Site : **https://lamaisonduplacoplatre.com** (GitHub Pages déjà actif — DNS rien à faire ✓)
ZIP à utiliser : **site-maison-du-placoplatre-v6-github.zip**

---

## ⬆️ ÉTAPE 1 — Supprimer les anciens fichiers du dépôt

Sur github.com → ton dépôt → entre dans chaque fichier → icône **corbeille (Delete file)** → **Commit changes**.
*(GitHub ne permet pas de supprimer un dossier d'un coup : entre dans `css/`, `js/`, `lib/` et supprime fichier par fichier.)*

### Pages à supprimer (5)
- [ ] `service.html`
- [ ] `À propos.html`
- [ ] `Contact Us.html`
- [ ] `Coûts d'Isolation.html`
- [ ] `FQAs.html`

### Dossiers à supprimer (3 — tout leur contenu)
- [ ] `css/` (au moins `style.css`)
- [ ] `js/` (au moins `main.js`)
- [ ] `lib/` (tous les dossiers : animate, counterup, easing, flaticon, isotope, lightbox, owlcarousel, slick, waypoints, wow)

### Images à supprimer (10)
- [ ] `img/favicon-32x32.png`
- [ ] `img/favicon.ico.png`
- [ ] `img/favicon.svg`
- [ ] `img/logo.jpg`
- [ ] `img/lamaisonduplacoplatre (1).jpg`
- [ ] `img/pro11.jpg`
- [ ] `img/pro13.jpg`
- [ ] `img/pro15.jpg`
- [ ] `img/pro16.jpg`
- [ ] `img/pro17.jpg`

*(Si tu vois d'autres vieux fichiers du template non listés ici, supprime-les aussi : le nouveau site n'utilise QUE les fichiers listés à l'étape 2.)*

## ✅ Fichiers à NE PAS toucher (déjà en ligne, identiques au nouveau site)
`img/murs2.jpg`, `murs3.jpg`, `murs4.jpg`, `murs5.jpg`, `murs6.jpg`, `murs7.jpg`, `murs9.jpg`, `pro12.jpg`, `pro14.jpg`, `pro18.jpg`

---

## 📤 ÉTAPE 2 — Uploader les nouveaux fichiers (20)

**Add file → Upload files** → glisse **tout le contenu du ZIP** (les fichiers + le dossier `img` ensemble, GitHub conserve les chemins) → Commit changes avec le message « Nouveau site v6 ».

| Fichier | Action |
|---|---|
| `index.html` | 🔁 Remplace l'ancien (nouveau site une-page) |
| `devis_placo.html` | ➕ Nouveau — calculateur placo |
| `devis_peinture.html` | ➕ Nouveau — calculateur peinture |
| `devis_etancheite.html` | ➕ Nouveau — calculateur étanchéité |
| `img/logo.png` | ➕ Nouveau — favicon |
| `404.html` | ➕ Nouveau — page introuvable aux couleurs du site |
| `CNAME` | 🔁 Même domaine — sans danger |
| `.nojekyll` | ➕ Nouveau — publication directe sans Jekyll |
| `robots.txt` | 🔁 Remplace (déjà correct) |
| `sitemap.xml` | 🔁 Remplace — l'ancien pointait vers `www.*`, `about.html`, `FQAs.html` (2023) ❌ |
| `img/murs*.jpg`, `img/pro12/14/18.jpg` | 🔁 Déjà en ligne identiques — re-uploader ne change rien |

---

## 🕐 ÉTAPE 3 — Vérifier en ligne

1. Attends 1 à 3 minutes (GitHub reconstruit le site après chaque commit).
2. Ouvre **https://lamaisonduplacoplatre.com** avec **Ctrl + F5** (le cache navigateur garde l'ancienne page 10 minutes).
3. Vérifie :
   - [ ] Le nouveau site s'affiche (titre « Plaque de Plâtre Tunisie — Prix Placoplâtre au m² & Pose BA13 »)
   - [ ] Le bouton « Devis en ligne » ouvre le popup avec les 3 cartes
   - [ ] Chaque carte ouvre son calculateur (placo / peinture / étanchéité)
   - [ ] Les photos de chantiers s'affichent
   - [ ] https://lamaisonduplacoplatre.com/sitemap.xml affiche les 4 bonnes pages

---

## 🧯 Dépannage

| Problème | Solution |
|---|---|
| Ancien site encore affiché | Ctrl + F5, ou attends 10 min (cache) |
| 404 sur une image | Le fichier `img/...` n'a pas été uploadé — revérifie l'étape 2 |
| Le popup ne s'ouvre pas | Vérifie que `index.html` à la racine est bien le nouveau (le titre doit contenir « BA13 ») |
| `https://` barré | Settings → Pages → coche « Enforce HTTPS » |
