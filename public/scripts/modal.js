export default function Modal(){
    
    const modalWrapper = document.querySelector('.modal-wrapper')
    const button = document.querySelector('.button')
    
    modalWrapper.classList.add("active")
    button.addEventListener("click", getNickname)

    function open(){
        modalWrapper.classList.add("active")
    }

    function getNickname() {
        var player1 = document.getElementById("Nname").value;
        console.log(player1);
        socket.emit('playerJoin', player1);
        close();
    }

    function close(){
        modalWrapper.classList.remove("active")
    }

    return {
        close,
        open
    }
}

export function ModalLoading(){
    
    const modalWrapper = document.querySelector('.modal-wrapper')
    
    modalWrapper.classList.add("active")

    function open(){
        modalWrapper.classList.add("active")
    }
    function close(){
        modalWrapper.classList.remove("active")
    }
    return {
        close,
        open
    }
}