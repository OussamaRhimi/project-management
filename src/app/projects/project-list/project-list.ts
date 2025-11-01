import { Component } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { ProjectDetail } from '../project-detail/project-detail';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, FormsModule, TaskList, ProjectDetail],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class ProjectList {
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

  selectedProject: any = null;
  searchTerm: string = '';
  filterBy: string = 'all'; // New: Controls filter field

  onSelectProject(project: any) {
    this.selectedProject = project;
  }

  get filteredProjects() {
    if (!this.searchTerm) return this.projects;
    const term = this.searchTerm.toLowerCase();
    return this.projects.filter(project => {
      if (this.filterBy === 'all') {
        // Multi-field search (original enhanced logic)
        return (
          project.name.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.status.toLowerCase().includes(term) ||
          project.tasks.some((t: any) =>
            t.title.toLowerCase().includes(term) ||
            t.priority.toLowerCase().includes(term) ||
            t.status.toLowerCase().includes(term)
          )
        );
      } else if (this.filterBy === 'name') {
        return project.name.toLowerCase().includes(term);
      } else if (this.filterBy === 'description') {
        return project.description.toLowerCase().includes(term);
      } else if (this.filterBy === 'status') {
        return project.status.toLowerCase().includes(term);
      } else if (this.filterBy === 'tasks') {
        return project.tasks.some((t: any) =>
          t.title.toLowerCase().includes(term) ||
          t.priority.toLowerCase().includes(term) ||
          t.status.toLowerCase().includes(term)
        );
      }
      return false;
    });
  }

  getProjectProgress(project: any): number {
    if (!project.tasks || project.tasks.length === 0) {
      return 0;
    }
    const completed = project.tasks.filter((t: any) => t.status === 'Terminé').length;
    return (completed / project.tasks.length) * 100;
  }
}