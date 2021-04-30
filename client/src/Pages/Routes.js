import { Route, Switch } from 'react-router'
import * as page from './Component'

const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route exact path='/' component={page.homepage}/>
                <Route path='/Create-Post' component={page.createpost}/>
                <Route component={page.notfound}/>
            </Switch>
        </div>
    )
}

export default Routes