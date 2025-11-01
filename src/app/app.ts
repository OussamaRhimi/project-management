import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectList } from "./projects/project-list/project-list";
import { AddProject } from "./projects/add-project/add-project";
import { EditProject } from "./projects/edit-project/edit-project";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectList, AddProject, EditProject],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  selectedProject: any = null;

  projects = [
    {
      name: 'Refonte du site web',
      description: 'Améliorer l’UX, l’accessibilité et la compatibilité mobile du site.',
      status: 'En cours',
      createdDate: '2025-10-15',
      tasks: [
        { title: 'Créer les maquettes', priority: 'Haute', status: 'Terminé' },
        { title: 'Développer la page d’accueil', priority: 'Haute', status: 'En cours' },
        { title: 'Tester sur mobile', priority: 'Moyenne', status: 'En attente' },
      ]
    },
    {
      name: 'Campagne marketing T4',
      description: 'Planifier et exécuter les campagnes marketing sur les réseaux sociaux et par email.',
      status: 'Terminé',
      createdDate: '2025-10-15',
      tasks: [
        { title: 'Définir les objectifs', priority: 'Haute', status: 'Terminé' },
        { title: 'Concevoir les visuels', priority: 'Moyenne', status: 'Terminé' },
        { title: 'Programmer les publications', priority: 'Moyenne', status: 'En cours' },
      ]
    },
    {
      name: 'Développement App Mobile',
      description: 'Construire une application mobile pour la gestion des stocks en temps réel.',
      status: 'En cours',
      createdDate: '2025-09-20',
      tasks: [
        { title: 'Designer l\'interface utilisateur', priority: 'Haute', status: 'En cours' },
        { title: 'Intégrer l\'API backend', priority: 'Haute', status: 'En attente' },
        { title: 'Implémenter les notifications push', priority: 'Basse', status: 'Terminé' },
        { title: 'Effectuer les tests unitaires', priority: 'Moyenne', status: 'En attente' },
      ]
    },
    {
      name: 'Organisation Événement Annuel',
      description: 'Préparer la conférence annuelle de l\'équipe avec intervenants et logistique.',
      status: 'En attente',
      createdDate: '2025-10-10',
      tasks: [
        { title: 'Réserver la salle et le traiteur', priority: 'Haute', status: 'En attente' },
        { title: 'Contacter les intervenants', priority: 'Moyenne', status: 'En cours' },
        { title: 'Créer les invitations digitales', priority: 'Basse', status: 'Terminé' },
      ]
    },
    {
      name: 'Analyse de Données Ventes',
      description: 'Analyser les données de ventes du trimestre pour générer un rapport insight.',
      status: 'Terminé',
      createdDate: '2025-08-05',
      tasks: [
        { title: 'Collecter et nettoyer les données', priority: 'Haute', status: 'Terminé' },
        { title: 'Générer les graphiques et tableaux', priority: 'Moyenne', status: 'Terminé' },
        { title: 'Rédiger les conclusions', priority: 'Basse', status: 'Terminé' },
        { title: 'Présenter au management', priority: 'Haute', status: 'Terminé' },
      ]
    },
    {
      name: 'Mise à Jour Système CRM',
      description: 'Migrer et optimiser le système CRM pour supporter plus d\'utilisateurs.',
      status: 'En cours',
      createdDate: '2025-10-01',
      tasks: [
        { title: 'Évaluer les besoins actuels', priority: 'Moyenne', status: 'Terminé' },
        { title: 'Choisir le nouveau fournisseur', priority: 'Haute', status: 'En cours' },
        { title: 'Migrer les données existantes', priority: 'Haute', status: 'En attente' },
        { title: 'Former les utilisateurs', priority: 'Basse', status: 'En attente' },
        { title: 'Tester la stabilité', priority: 'Moyenne', status: 'En attente' },
      ]
    }
  ];

  onSelectProject(project: any) {
    this.selectedProject = project;
  }

  onProjectAdded(newProject: any) {
    this.projects = [...this.projects, newProject];
  }

  onProjectUpdated(updatedProject: any) {
    this.projects = this.projects.map(p => p.name === updatedProject.name ? updatedProject : p);
  }
}
