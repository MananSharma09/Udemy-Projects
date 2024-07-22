function calMatAmt()
{
    const principle=parseFloat(document.getElementById('principle').value);
    const intrestRate=parseFloat(document.getElementById('intrestRate').value);
    const tenure=parseFloat(document.getElementById('tenure').value);

    const maturityAmount=principle + (principle * intrestRate * tenure) / 100;

    document.getElementById('result').innerHTML=`Maturity Amount : ${maturityAmount.toFixed(2)}`;
}

document.getElementById('calculateBtn').addEventListener('click',calMatAmt);