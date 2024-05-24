import React from 'react'

export default function Badge({text="Badge", color="gray", shape="square", ...rest}) {

    const colorOptions = [
        {
        name: "gray",
        color: "#1F2937",
        bgColor: "#F3F4F6"
    },
    {
        name: "red",
        color: "#991B1B",
        bgColor: "#FEE2E2"
    },
    {
        name: "yellow",
        color: "#92400E",
        bgColor: "#FEF3C7"
    },
    {
        name: "green",
        color: "#065F46",
        bgColor: "#D1FAE5"
    },
    {
        name: "blue",
        color: "#1E40AF",
        bgColor: "#DBEAFE"
    },
    {
        name: "indigo",
        color: "#3730A3",
        bgColor: "#E0E7FF"
    },
    {
        name: "purple",
        color: "#5B21B6",
        bgColor: "#EDE9FE"
    },
    {
        name: "pink",
        color: "#9D174D",
        bgColor: "#FCE7F3"
    }
    
]
    
    const colorChoice = color?colorOptions.find(c => c.name === color): colorOptions[0]
    const shapeStyle = shape === "pill" ? "20px" : "4px"
    const style = {
        color: colorChoice.color,
        backgroundColor: colorChoice.bgColor,
        borderRadius: shapeStyle,
        width: "fit-content",
        padding: '.5rem 1rem',
        fontWeight: "500"
    }

    const classList = rest.className? rest.className.join(" "): ''

    return (
        <div className={classList} style={style}>{text}</div>
    )
}