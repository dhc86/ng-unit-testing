import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should be initialized with total votes equal to zero', () => {
    expect(component.totalVotes).toBe(0);
  });
  it('should be increament total votes when clicking on upVote', () => {
    component.upVote()
    expect(component.totalVotes).toBe(1);
  });
  it('should be emit total votes when clicking on upVote', () => {
    let totalVotes = null;
    component.voteChanged.subscribe((tv)=> {
      totalVotes = tv;
    });
    component.upVote();
    expect(totalVotes).toBe(1);
    // expect(totalVotes).not.toBeNull();
  });
});
