const ContactModel = require('../Models/Contact')

//fonction ajouter contact

exports.ajouterContact = (req,res) => {

    const contactObjet = {
        nom : req.body.nom,
        numero : req.body.numero
    }

    const contact = new ContactModel(contactObjet)
    // insert data in database
    contact.save( (error , createdContact) => {
        if(error) return res.status(400).json({error})
        if(createdContact){
            return res.status(200).json({createdContact});
        } 
    })


    //res.status(200).json({message : "donnée  Ajouter"});
}

// fonction modifier 
exports.modifierContact = (req,res) => {
    const param = req.params.idcontact;

    const modifiedObj = {
        nom : req.body.nom ,
        numero : req.body.numero,
    }

    ContactModel.findByIdAndUpdate( param , modifiedObj ).exec( (error ,modifiedContact) =>  {
            if(error) return res.status(400).json({error})
            if(modifiedContact){
                return res.status(200).json({modifiedContact});
            } 
      } )
}

// fonction supprimer  Contact

exports.supprimerContact = (req,res) => {
   
    const param = req.params.idcontact;

    ContactModel.findByIdAndRemove(param).exec( (error , deletedContact) => {
        if (error) return res.status(400).json({ error })
        if (deletedContact){
            return res.status(200).json( {"message" : " contact supprime avec succes "})
        }
    })
}

// fonction afficher contact

exports.listerContact = (req,res) => {
   
    ContactModel.find({}).exec((error , contactList ) =>{
        if (error) return res.status(400).json({ error})
        if (contactList){
            return res.status(200).json({ contactList })
        }
    })

}