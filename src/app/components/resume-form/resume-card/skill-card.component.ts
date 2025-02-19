import {Component, Input} from '@angular/core';
import {Skill} from '../../../models/skill';
import {MatDialog} from '@angular/material/dialog';
import {SkillFormComponent} from '../resume-dialogues/skill-form.component';
import {ResumeRepository} from '../../../repository/resume-repository';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-skill-card',
  template: `
    <div style="position: relative;margin-bottom: 1rem;" fxLayoutAlign="center center" fxLayout="column">
      <div class="cards-outer-div" fxLayout="column" fxLayoutAlign="center center">
        <ng-container>
          <h3 class="resume-form-info-card-heading">{{skill.skill}}</h3>
          <h3 class="resume-form-info-card-heading">{{skill.level}}</h3>
          <p class="resume-form-info-card-heading">{{skill.represent}}</p>
        </ng-container>
        <div fxLayoutAlign="center center">
          <div class="hover-container">
            <div class="hover">
              <button (click)="edit()" class="resume-form-mat-icon-button" mat-icon-button>
                <mat-icon class="resume-form-mat-icon">create</mat-icon>
              </button>
              <button (click)="delete()" class="resume-form-mat-icon-button" mat-icon-button>
                <mat-icon class="resume-form-mat-icon">delete</mat-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})

export class SkillCardComponent {
  @Input() skill: Skill;
  @Input() resumeId: string;

  constructor(private matDialog: MatDialog, private resumeRepository: ResumeRepository, private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(SkillFormComponent, {
      width: '90%', height: '90%', data: {skill: this.skill, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepository.deleteSkill(this.skill._id, this.resumeId)
      .subscribe(data => {
        this.alertService.success('Skill deleted Successfully');
      });
  }
}
