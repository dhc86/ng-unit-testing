import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;
  beforeEach(() => {
    voteComponent = new VoteComponent();
  });

  it('should be initialize with a value of 0 total votes', () => {
    expect(voteComponent.totalVotes).toBe(0);
  });
  it('should increase total votes by 1 when clicking on upVote', () => {
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(1);
  });
  it('should decrease total votes by 1 when clicking on downVote', () => {
    voteComponent.upVote();
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(0);
  });
});
