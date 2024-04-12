import { useTheme } from "@/context/ThemeContext"

const Card:React.FC=()=>{
    const theme=useTheme()
    const isDarkMode = theme?.isDarkMode ?? false;

    return(
        <div className={`card ${isDarkMode ? "dark" : "light"}`}>
            This card is on {isDarkMode ? "dark mode" : "light mode"}

        </div>
    )
}

export default Card;