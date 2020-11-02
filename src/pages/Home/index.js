import React from 'react'
import News from '../News'
// import Index from '../Index'
import HouseList from '../HouseList'
import My from '../My'
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'

 
export default class Home extends React.Component {
    state = {
        selectedTab: 'redTab',
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    Click to show/hide tab-bar
            </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    Click to switch fullscreen
            </a>
            </div>
        );
    }


    render() {
        return (

            <div className="home">


                <Route path="/home/news" component={News}></Route>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/news" component={News}></Route>


                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#21b93a"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="首页"
                        icon={<i className="iconfont icon-ind" />}

                        selectedIcon={<i className="iconfont icon-ind" />}

                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-findHouse" />}
                        selectedIcon={<i className="iconfont icon-findHouse" />}


                        title="找房"
                        key="找房"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-infom" />}

                        selectedIcon={<i className="iconfont icon-infom" />}

                        title="资讯"
                        key="资讯"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-my" />}
                        selectedIcon={<i className="iconfont icon-my" />}
                        title="我的"
                        key="我的"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }

}