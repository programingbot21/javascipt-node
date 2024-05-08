class RailwayForm{
    submit(){
        alert(this.name + ` : form is submitted   ` + this.trainno )
    }
    cancel(){
        alert( this.name + ` : This Form is Cancelled  ` + this.trainno  )
    }
    fill(givenname , trainno){
        this.name = givenname
        this.trainno = trainno
    }

    // fill(givenno){
    //     this.trainno = givenno
    // }
}

let RamanForm = new RailwayForm()

RamanForm.fill("Ramen", 148253)

let RohanForm = new RailwayForm()
RohanForm.fill("Rohan", 132535)


RamanForm.submit()
RohanForm.submit()
RohanForm.cancel()
