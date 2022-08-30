import './style.scss'

interface SwitcherProps{
    title:string;
    categories:string[];
}

export function Switcher({title,categories}:SwitcherProps){

    function handleSetCategory(id:string){
        const switchBtn = categories.map(category=>{
            return document.getElementById(category)
        })
        switchBtn.forEach(button=>{
            if(button?.className=='isActive')
                button.classList.remove('isActive')

            if(button?.id===id)
                button.classList.add('isActive')
        })

    }

    return(
        <div className="container-switcher">
            <h2>{title}</h2>
            <div className="options-box">
                {
                    categories.map(category=>{
                        return(
                            <div id={category}>
                                 <a href="#" key={category}
                                onClick={()=>handleSetCategory(category)}>{category}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}