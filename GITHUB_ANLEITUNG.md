# Virela kostenlos mit GitHub Pages veröffentlichen

Diese Anleitung gilt für einen persönlichen GitHub-Account auf einem Windows-PC. Das Projekt ist bereits vollständig für GitHub Pages vorbereitet. Eine `index.html` musst du nicht selbst erstellen: Sie wird beim Build automatisch im Ordner `out` erzeugt.

## 1. Öffentliches Repository erstellen

1. Bei GitHub mit deinem persönlichen Account anmelden.
2. Rechts oben auf **+** und anschließend auf **New repository** klicken.
3. Als Besitzer deinen persönlichen Account auswählen.
4. Als Namen `virela-startup-website` eintragen.
5. Die Sichtbarkeit auf **Public** stellen.
6. README, `.gitignore` und Lizenz nicht zusätzlich erzeugen, da diese Dateien bereits im Projekt enthalten sind.
7. Auf **Create repository** klicken.

## 2. Projekt auf dem Windows-PC entpacken

Die ZIP-Datei beispielsweise hierhin entpacken:

```text
C:\Users\DEIN-NAME\Projects\virela-startup-website
```

## 3. Persönliche Git-Identität eintragen

PowerShell öffnen und ausführen:

```powershell
git config --global user.name "DEIN ANZEIGENAME"
git config --global user.email "DEINE GITHUB-NOREPLY-ADRESSE"
```

Die Noreply-Adresse findest du auf GitHub unter **Settings → Emails**.

## 4. Projekt zu GitHub übertragen

In PowerShell in den entpackten Projektordner wechseln:

```powershell
cd C:\Users\DEIN-NAME\Projects\virela-startup-website
```

Danach die folgenden Befehle nacheinander ausführen. `DEIN-BENUTZERNAME` ersetzen:

```powershell
git init
git add .
git commit -m "feat: add Virela startup website"
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/virela-startup-website.git
git push -u origin main
```

Beim ersten Push kann sich ein Browserfenster zur GitHub-Anmeldung öffnen.

## 5. GitHub Pages aktivieren

1. Das Repository auf GitHub öffnen.
2. Auf **Settings** klicken.
3. Links unter **Code and automation** auf **Pages** klicken.
4. Unter **Build and deployment** bei **Source** die Option **GitHub Actions** auswählen.

Der enthaltene Workflow baut die Next.js-Seite automatisch und veröffentlicht den Ordner `out`.

## 6. Veröffentlichung kontrollieren

1. Im Repository oben auf **Actions** klicken.
2. Den Workflow **Virela auf GitHub Pages veröffentlichen** öffnen.
3. Falls nach der Aktivierung noch kein erfolgreicher Lauf vorhanden ist, rechts auf **Run workflow** und anschließend erneut auf **Run workflow** klicken.
4. Warten, bis Build und Deployment grün markiert sind.
5. Danach unter **Settings → Pages** auf **Visit site** klicken.

Die Adresse lautet normalerweise:

```text
https://DEIN-BENUTZERNAME.github.io/virela-startup-website/
```

Die erste Veröffentlichung kann einige Minuten dauern.

## 7. Spätere Änderungen veröffentlichen

Nach einer Änderung im Projektordner:

```powershell
git status
git add .
git commit -m "Update website"
git push
```

Jeder Push auf `main` startet automatisch eine neue Veröffentlichung.

## Häufige Fragen

### Wo ist die index.html?

Im Quellcode ist `app/page.tsx` die Startseite. Beim GitHub-Actions-Build erstellt Next.js daraus automatisch `out/index.html`. Der Ordner `out` wird nicht in das Repository eingecheckt, sondern direkt als Website veröffentlicht.

### Warum soll das Repository öffentlich sein?

GitHub Pages ist im kostenlosen GitHub-Free-Tarif für öffentliche Repositorys verfügbar. Die Website und der Quellcode sind dadurch öffentlich sichtbar - für ein Portfolio ist das normalerweise erwünscht.

### Was kostet die Veröffentlichung?

Bei einem öffentlichen Repository, der normalen `github.io`-Adresse und dem enthaltenen Standard-Workflow entstehen keine Kosten. Eine separat gekaufte eigene Domain wäre optional.
