import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  empForm: FormGroup;
  education: string[] = ['Matric', 'Intermediate', 'Graduation', 'Post Graduation']

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private dialogRef: MatDialogRef<AddEditEmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      exp: '',
      package: '',
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }

  onSubmit() {
    if (this.empForm.valid) {
      // console.warn(this.empForm.value)
      if (this.data) {
        //Edit Employee Details in server
        this.service.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (value: any) => {
            alert('Employee Details Updated Successfully ')
            this.dialogRef.close(true)
          },
          error: (err: any) => {
            alert(err);
          }
        })
      }
      else {
        //Add Employee Details in server
        this.service.addEmployee(this.empForm.value).subscribe({
          next: (value: any) => {
            alert('Employee Added Successfully ')
            this.dialogRef.close(true)
          },
          error: (err: any) => {
            alert(err);
          }
        })
      }

    }
  }


}
