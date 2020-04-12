import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;
  var form: FormBuilder;
  beforeEach(() => {
    form = new FormBuilder()
    component = new TodoFormComponent(form)
  });

  it('should create a form with two controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBe(true);
  });

  it('should make the name control required', () => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBe(false);
  });
});
