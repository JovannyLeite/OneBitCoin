import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        backgroundColor: "#000000",
        marginLeft: "3%",
        marginBottom: 15,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    contextLeft:{
        width: "36%",
        height: "100%",
        alignItems: "flex-start",
    },
    boxLogo:{
        flexDirection: "row",
        alignItems: "center",
    },
    dayCotation:{
        fontSize: 16,
        paddinLeft: 2,
        color: "#ffffff",
        fontWeight: "bold",
    },
    contextRight:{
        width: "60%",
        alignItems: "flex-end",
    },
    price:{
        fontSize: 16,
        paddinLeft: 2,
        color: "#ffffff",
        fontWeight: "bold",
    }
    
})

export default styles