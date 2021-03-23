import React, { PureComponent } from 'react'
import { ThemeContext } from './theme-context'
class MyButton extends PureComponent {
    // render() {
    //     console.log(this.props, 'button props')
    //     console.log(this.context, 'button context')
    //     let theme = this.context
    //     return <button {...this.props} style={{backgroundColor: theme.background, border: 'none'}}></button>
    // }
    render () {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button {...this.props} onClick={toggleTheme} style={{backgroundColor: theme.background, border: 'none'}}></button>
                )}
            </ThemeContext.Consumer>
        )
    }
}
export default MyButton