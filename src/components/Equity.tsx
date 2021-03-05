import React, { Component } from 'react';
import { Statistic, Row, Col, Typography, Button, Divider } from 'antd';
const { Text } = Typography;
import * as qs from 'query-string';
import Search from 'antd/lib/input/Search';

type EquityState = {
    data: any,
    msg: string
  }

export default class Equity extends Component<{}, EquityState> {

    state: EquityState = {
        data:{},
        msg:"Loading data..."
    }


    getData(value:any|null) {

        console.log(value);
        let url = '';
        if ( value == null ) {
            const parsed = qs.parse(location.search);
            const token=parsed.s;
            url = './equities/'+token+'.json';
        }else {
            url = './equities/'+value+'.json';
        }
        
        fetch(url,{ headers : 
            { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            console.log(response)
            return response.json();
        }).then( ret => {
            console.log(ret);
            this.setState({
                data: ret,
                msg: ""
            });
        });
    }

    componentDidMount() {
        this.getData(null);
    }

    render() {
        if ( this.state.msg == "" ) {
            return  (
                <div>
                    <Row gutter={16}>
                        <Col span={10}>
                            <Statistic title="Current Equity" value={this.state.data.current_equity} precision={2} />
                        </Col>
                        <Col span={8}>
                            <Statistic title={"Profit in " + this.state.data.duration + " days"} value={this.state.data.profit} precision={2} />
                        </Col>
                        <Col span={6}>
                            <Statistic title={"APR in " + this.state.data.duration + " days"} value={this.state.data.apr} suffix="%" />
                        </Col>
                        <Col span={10} style={{ marginTop: 16 }}>
                            <Statistic title={"Previous Equity (" + this.state.data.previous_updated + ")"} value={this.state.data.previous_equity} precision={2} />
                        </Col>
                    </Row>
                    <Divider />
                    <Text type="secondary">Last updated: {this.state.data.updated}</Text>
                </div>
              );
        }else {
            return (
                    <Search
                    placeholder="Authorization code"
                    allowClear
                    enterButton="Enter"
                    size="large"
                    onSearch={this.getData.bind(this)}
                    />)
        }
    }
}