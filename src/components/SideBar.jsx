export default function SideBar(props){

    const { handleToggleModal, data} = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
            <h2> {data?.title}</h2>

            <div className="descriptionContainer">
                <p className="descriptionTitle">
                    {data?.date}
                </p>
                <p>

                    {data?.explanation}
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iusto repellendus doloremque odio provident animi cupiditate eos, quas saepe reiciendis, dicta nobis nesciunt expedita voluptatum quod facere voluptates architecto? Ducimus. */}
                </p>
            </div>

            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
    )
}