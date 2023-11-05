class Note{
    constructor(id, title, text){
        this.id = id,
        this.title =title,
        this.text = text
    }
}

class App{
    constructor(){
        
        this.note=[];

        this.$activeform=  document.querySelector(".note-taking");
        this.$inActiveform=  document.querySelector(".active-form");
        this.$notes = document.querySelector("#notes")
        
       

        this.addEventListeners();

        }       

        addEventListeners() {
        document.body.addEventListener("click", (event) => {
            this.handleFormClick(event);
        })
        }

        handleFormClick(event) {
        const clickONActive = this.$activeform.contains(event.target)
        const  clickONInactive =this.$inActiveform.contains(event.target)
        
        if ( clickONInactive){
            this.$activeform.style.display = "block";
            this.$inActiveform.style.display = "none";
            this.$notes.focus();
        } 
        else if (!clickONInactive && !clickONActive){
            this.$activeform.style.display = "none";
            this.$inActiveform.style.display = "block";
        }
    }
}

const app = new App();