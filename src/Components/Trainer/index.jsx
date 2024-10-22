function Trainer({image,alt,trainerName,trainerText}) {
return(
    <div>
        <h3>{trainerName}</h3>
        <p>{trainerText}</p>
    <img src={image} alt={alt}/>
    
   
</div>
)
}

export default Trainer