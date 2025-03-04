import "./BoxColor.css"

const BoxColor = (props) => {

    const {r, g, b} = props

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    };

    return(
        <div style={divStyle} className="box-color">
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor