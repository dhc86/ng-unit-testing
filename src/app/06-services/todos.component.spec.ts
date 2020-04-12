import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of, empty, throwError } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let todoService: TodoService;
  let httpClient: HttpClient;
  beforeEach(() => {
    // httpClient = new HttpClient();
    // no need to do it, we do not what to use the actual TodoService
    // we want it to use a fake implementation called stub
    todoService = new TodoService(null);
    component = new TodosComponent(todoService);
  });

  it('should set todo items list with the list returned from api when initializing the component', () => {
    let todos = [1, 2, 3, 4];
    // first set up your fake call
    // use spyOn to have control over a method in class and make a fake call. returning an array observable.
    spyOn(todoService , 'getTodos').and.callFake(()=> {
      // of returns an observable array
      return of(todos);
    });
    // then call th fake service from component
    component.ngOnInit();
    expect(component.todos.length).toBe(todos.length);
    // expect(component.todos.length).toBeGreaterThan(0);
  });

  it('should call the service to add the new todo item', () => {
    // create te spy service.
    let spy = spyOn(todoService, 'add').and.callFake((t) => {
      return empty();
    });
    // note that the add method creates a todo and then passes it to the service add method.
    component.add();
    // How do we make sure service.cadd is called?
    expect(spy).toHaveBeenCalled();

  });
  it('should add the new todo to the todoItems list', () => {
    let todo = { title: '... ' , id: '43xadak'};
    // create te spy service.
    // let spy = spyOn(todoService, 'add').and.callFake( t => {
    //   return of([{ title: '... ' , id: '43xadak'}]);
    // });

    // for a cleaner way to do this, we can use returnValue... instead of callFake
    let spy = spyOn(todoService, 'add').and.returnValue(of([todo]))

    // note that the add method creates a todo and then passes it to the service add method.
    component.add();

    expect(component.todos.length).toBe(1);

  });
  it('should set the message property if an error is returned by server when adding new todo item', () => {
    let spy = spyOn(todoService, 'add').and.returnValue(throwError('Error Occurred'));

    // note that the add method creates a todo and then passes it to the service add method.
    component.add();

    expect(component.message).toBe('Error Occurred');
  });
  it('should call server to delete item if user to confims prompt', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(todoService, 'delete').and.returnValue(empty())

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });
  it('should NOT call server to delete item if user cancels prompt', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(todoService, 'delete').and.returnValue(empty())

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});
