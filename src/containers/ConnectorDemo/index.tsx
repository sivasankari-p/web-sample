import React from "react";
import { connect } from "react-redux";

import { fetchTodos } from "../../actions/demo";
import {STORE_KEYS, TODO_KEYS} from "../../reducers";

interface IConnectorDemoProps {
    fetchTodos: () => {},
}

class ConnectorDemo extends React.Component<IConnectorDemoProps> {
    componentDidMount(): void {
        this.props.fetchTodos();
    }

    render() {
        console.log({ ...this.props });
        return (
            <div />
        );
    }
}

const mapStateToProps = (state: { [key: string]: any }) => ({
    loading: state[STORE_KEYS.TODO_STORE][TODO_KEYS.LOADING],
    length: state[STORE_KEYS.TODO_STORE][TODO_KEYS.TODO_LIST],
});

const mapDispatchToProps = {
    fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectorDemo);
