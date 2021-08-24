import { eventBusService } from '../services/event-bus.service.js';
const { Link } = ReactRouterDOM;

export class UserMsg extends React.Component {
  state = { msg: null };

  componentDidMount() {
    this.removeEventBus = eventBusService.on('user-msg', (msg) => {
      this.setState({ msg }, () => {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(this.onCloseMsg, 4000);
      });
    });
  }

  onCloseMsg = () => {
    this.setState({ msg: null });
    clearTimeout(this.timeoutId);
  };

  componentWillUnmount() {
    this.removeEventBus();
  }

  getMsgInfo = () => {
    const { msg } = this.state;
    if (msg.text === 'book added') {
      return (
        <React.Fragment>
          Book {msg.book.title} successfuly added.<span> </span>
          <span onClick={this.onCloseMsg}>
            <Link to={`book/${msg.book.addedId}`}>Click here to see more.</Link>
          </span>
          <button className="btn btn-close" onClick={this.onCloseMsg}></button>
        </React.Fragment>
      );
    }
  };

  render() {
    const { msg } = this.state;
    if (!msg) return <section className="user-msg opacity-0"></section>;
    return (
      <section className={'user-msg opacity-100 ' + msg.type}>{msg && this.getMsgInfo()}</section>
    );
  }
}
