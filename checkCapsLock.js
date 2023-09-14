const enterInput = (e) => {
        const flag = e.getModifierState("CapsLock")
        console.log("-------->", flag)
    }
// pass the above function in input inside "onMouseDown"
