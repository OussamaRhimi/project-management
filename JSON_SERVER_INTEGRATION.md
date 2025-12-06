# JSON Server Integration for Projects Section

This document explains the step-by-step changes made to integrate a JSON server into the projects section of the Angular application, replacing hardcoded data with dynamic data management.

## Overview

The integration allows the application to fetch, add, and update project data from a JSON server running on port 3001, providing better data persistence and management capabilities.

## Step-by-Step Changes

### 1. Install JSON Server

**Command executed:**
```bash
npm install --save-dev json-server
```

**Purpose:** Installs the JSON server package as a development dependency to serve JSON data.

### 2. Update package.json Scripts

**File:** `package.json`

**Changes:**
- Added a new script: `"json-server": "json-server --watch db.json --port 3001"`

**Purpose:** Creates a convenient command to start the JSON server watching the `db.json` file on port 3001.

### 3. Create Database File

**File:** `db.json` (new file)

**Content:**
```json
{
  "projects": [
    {
      "name": "Refonte du site web",
      "description": "Améliorer l'UX, l'accessibilité et la compatibilité mobile du site.",
      "status": "En cours",
      "createdDate": "2025-10-15",
      "tasks": [
        { "title": "Créer les maquettes", "priority": "Haute", "status": "Terminé" },
        { "title": "Développer la page d'accueil", "priority": "Haute", "status": "En cours" },
        { "title": "Tester sur mobile", "priority": "Moyenne", "status": "En attente" }
      ]
    },
    // ... more projects
  ]
}
```

**Purpose:** Creates the initial data file containing all the project information that was previously hardcoded.

### 4. Update Angular Application Configuration

**File:** `src/app/app.config.ts`

**Changes:**
- Added import: `import                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <                                                                                                                             { provideHttpClient } from '@angular/common/http';`
- Added to providers array: `provideHttpClient()`

**Purpose:** Enables HTTP client functionality throughout the Angular application for making API calls.

### 5. Update Projects Page Component

**File:** `src/app/projects-page/projects-page.ts`

**Changes:**

**Imports:**
- Added: `import { OnInit } from '@angular/core';`
- Added: `import { HttpClient } from '@angular/common/http';`

**Class Declaration:**
- Changed: `export class ProjectsPageComponent implements OnInit`

**Properties:**
- Changed: `projects: any[] = [];` (removed hardcoded data)

**Constructor:**
- Added: `constructor(private http: HttpClient) {}`

**New Methods:**
- Added `ngOnInit()` lifecycle hook that calls `loadProjects()`
- Added `loadProjects()` method that fetches data from JSON server with fallback to hardcoded data

**Updated Methods:**
- `onProjectAdded()`: Now sends POST request to server and updates local array
- `onProjectUpdated()`: Now sends PUT request to server and updates local array

**Purpose:** Transforms the component to fetch data dynamically from the JSON server while maintaining fallback functionality.

### 6. Update Project List Component

**File:** `src/app/projects/project-list/project-list.ts`

**Changes:**
- Simplified `get projectList()` getter to return `this.projects` directly instead of checking for hardcoded fallback data

**Purpose:** Removes redundant hardcoded data since it's now handled at the parent component level.

## How to Use

### Starting the JSON Server
```bash
npm run json-server
```

This starts the JSON server on `http://localhost:3001` and watches the `db.json` file for changes.

### Starting the Angular Application
```bash
npm start
```

The application will now load project data from the JSON server.

## API Endpoints

The JSON server provides the following REST endpoints:

- `GET /projects` - Retrieve all projects
- `POST /projects` - Add a new project
- `PUT /projects/:id` - Update an existing project
- `DELETE /projects/:id` - Delete a project

## Fallback Behavior

If the JSON server is not running, the application falls back to using hardcoded data, ensuring the application remains functional even without the server.

## Benefits

1. **Dynamic Data Management:** Projects can now be added, updated, and managed externally
2. **Data Persistence:** Changes are saved to the JSON file
3. **API Simulation:** Mimics real backend API behavior for development
4. **Fallback Support:** Application works even if server is unavailable
5. **Easy Testing:** JSON server provides a simple way to test API interactions

## File Structure Changes

```
project-manager/
├── db.json (new)
├── package.json (updated)
├── src/
│   └── app/
│       ├── app.config.ts (updated)
│       ├── projects-page/
│       │   └── projects-page.ts (updated)
│       └── projects/
│           └── project-list/
│               └── project-list.ts (updated)
└── JSON_SERVER_INTEGRATION.md (new)
