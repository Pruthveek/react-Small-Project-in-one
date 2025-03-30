const LinkButton=({value})=>{
    return (
        <>
            <div className="py-2">
                <button className="bg-white py-2 px-5 rounded-3xl">{value}</button>
            </div>
        </>
    );
};
export default LinkButton;