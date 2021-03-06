function a(){
  
}


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budget Ledger</title>
    <link rel="stylesheet" href="pay.css">
    <link rel="icon" href="img/icon.jpg">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
    
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="load.html">Add Entry</a></li>
    <li><a href="pay.html">Pay</a></li>
    <li style="float:right"><a class="active" href="index.html">Budget Ledger</a></li>
  </ul>

    <div class="container">
    <div class="frame">
        <div class="nav">
        <ul class="links">
            <li class="signin-active"><a class="btn">Pay using Ethereum</a></li>
        </ul>
        </div>
        <div >
            <form class="form-signin" action="" method="post" name="form">
                <label for="username">Address</label>
                <input class="form-styling" type="text" id="address" name="username" placeholder="Enter Address" autocomplete="off"/>
                <label for="password">Amount</label>
                <input class="form-styling" type="number" id="amount" name="amount" placeholder=""/>
                <div class="btn-animate">
                    <a class="btn-signin">Pay</a>
                </div>
                <div id="status"></div>
            </form>
            
        </div>
        
        <script type="text/javascript">
                window.addEventListener('load', async () => {
                if (window.ethereum) {
                    window.Web3 = new Web3(ethereum);
                    try {
                    await ethereum.enable();
                    initPayButton()
                    } catch (err) {
                        $('#status').html('User denied account access', err)
                    }
                } else if (window.web3) {
                    window.Web3 = new Web3(web3.currentProvider)
                    initPayButton()
                } else {
                    $('#status').html('No Metamask (or other Web3 Provider) installed')
                }
                })
            
                const initPayButton = () => {
                $('.btn-signin').click(() => {
                    // paymentAddress is where funds will be send to
                    var paymentAddress = document.getElementById("address").value;
                    var amountEth = document.getElementById("amount").value;
            
                    web3.eth.sendTransaction({
                    to: paymentAddress,
                    value: web3.toWei(amountEth, 'ether')
                    }, (err, transactionId) => {
                    if  (err) {
                        console.log('Payment failed', err)
                        $('#status').html('Payment failed')
                    } else {
                        console.log('Payment successful', transactionId)
                        $('#status').html('Payment successful')
                    }
                    })
                })
                }
    
        </script>
        </div>
    </div>
        
</div>
</body>
</html>

*/