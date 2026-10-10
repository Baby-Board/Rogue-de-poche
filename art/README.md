# Portraits peints

- `prompts.tsv` : un portrait à générer par ligne (nom, élément, type m/b/h, description).
- `portraits/<nom>.jpg` : portraits déjà générés (256 px). Le nom de fichier = nom du monstre, ou `cls_<classe>` pour un héros.
- `python3 src/make.py --out <fichier>` reconstruit l'appli (index.html + version artefact) et embarque tous les portraits présents.

Générés avec Figma (generate_image, modèle gemini-3.1-flash-image, plan team::1094390046674412714).

Gabarit (m = monstre, b = boss : remplacer « monster » par « boss » et « warm rim light » par « dramatic rim light ») :

> Painterly fantasy RPG monster portrait, premium mobile game art in a whimsical storybook style. Subject: {desc}. Clean bold readable silhouette, crisp dark ink linework with rich soft painted shading, warm rim light, slight 3/4 view, head-and-shoulders bust centered and filling most of the square frame. Plain dark background with a soft {glow} glow behind the subject, vignette fading to near-black at the edges. No text, no border, no frame, no UI.

Héros (h) : « Painterly fantasy RPG hero character portrait … Subject: {desc}. Original character … »

Lueur : t = warm amber-ochre, f = fiery orange-red, e = cool sapphire blue, a = pale jade green.
