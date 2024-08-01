// get element 
const qrinput = document.getElementById('qr-input')
const qrbtn = document.getElementById('qr-btn')
const qrimg = document.getElementById('qr-img')

const qrdownlaod = document.getElementById('qr-download')


// event on generate button
qrbtn.addEventListener('click', function () {
    const inputvalue = qrinput.value
    console.log(inputvalue);

    if (!inputvalue) {
        alert("Please Enter valid URL ")
    } else {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}` // fetch thev value from input (user)
        qrimg.alt = `QR code for &{inputvalue}`
    }
})

//for downloading
qrdownlaod.addEventListener('click', async () => {
    const response =  await fetch(qrimg.src) // fetch the value for qrimg.src
    const blob = await response.blob() 
    const downlaodLink = document.createElement("a")
    downlaodLink.href = URL.createObjectURL(blob)
    downlaodLink.download = "qrcode.jpg"
    downlaodLink.click()

})