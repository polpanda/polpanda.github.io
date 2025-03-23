import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
  WagmiCore,
  WagmiCoreChains,
  WagmiCoreConnectors,
} from "https://unpkg.com/@web3modal/ethereum@2.6.2";
import { Web3Modal } from "https://unpkg.com/@web3modal/html@2.6.2";
const { polygon } = WagmiCoreChains;
const { configureChains, createConfig, getContract, usePrepareContractWrite, fetchBalance, readContract, prepareWriteContract, writeContract, getAccount, disconnect, readContracts, waitForTransaction   } = WagmiCore;
const chains = [polygon];
const projectId = "5e5a528b0f871b398dfaf47190a8bbbe"; //polpanda
const Contract = "0x3e97E8ee59d2d3f9361e9C35133Cf3ef4b00E737"; //polpandas
const abi_contract = [{"inputs":[{"internalType":"address","name":"_wallet1","type":"address"},{"internalType":"address","name":"_wallet2","type":"address"},{"internalType":"address","name":"_wallet3","type":"address"},{"internalType":"address payable","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CheckDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"getPlanByValue","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanHoldMultiplier","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"},{"internalType":"uint256","name":"holdBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"internalType":"uint256[10]","name":"","type":"uint256[10]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getUserPercentRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256[10]","name":"","type":"uint256[10]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"msgvalue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRefBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet3","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const investButton = document.getElementById("investButton");
const withdrawButton = document.getElementById("withdrawButton");

const DEFAULT_REFERRAL = "0xAa103DBA2496288B0Fc2e2410d48413BE102bf8F";
const REFERRAL_KEY = "REFERRAL";
const CURRENCY_DIGITS_AFTER_DOT = 6;


const tokenAddress = '0xad07405906734dbC9c2F61B7C528eFF1108Ea991';
const tokenSymbol = '$BEE';
const tokenDecimals = 18;
const tokenImage = 'app/images/INFINITE.html';

document.getElementById('AddTokenButton').addEventListener('click', () => {
    ethereum
        .request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                    image: tokenImage,
                },
            },
        })
        .then((success) => {
            if (success) {
                console.log('Token added!');
            } else {
                throw new Error('Something went wrong.');
            }
        })
        .catch(console.error);
});





// 2. Configure wagmi client
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ chains, version: 2, projectId }),
    new WagmiCoreConnectors.CoinbaseWalletConnector({
      chains,
      options: {
        appName: "html wagmi example",
      },
    }),
  ],
  publicClient,
});

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiConfig, chains);
export const web3Modal = new Web3Modal(
  {
    projectId,
    walletImages: {
      safe: "logo.png",
    },
	themeVariables: {
     '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-accent-color': '#f9a11f'
    },
  },
  ethereumClient
);
$(document).ready(function()
{ 	
    projectstats(); 
});
function account_c() {
  const account = getAccount();
	if(account['isConnected'] == true)
	{
	userstat();
	projectstats();
	}
}



async function projectstats() {
  try {

const data_project = await readContracts({
  contracts: [
    {
      address: Contract,
      abi: abi_contract,
      functionName: 'totalStaked',
    },
    {
      address: Contract,
      abi: abi_contract,
      functionName: 'totalRefBonus',
    },
	{
      address: Contract,
      abi: abi_contract,
      functionName: 'totalUsers',
    },
  ],
})

    var MyDate = new Date();
    let gas1 = ((MyDate.getTime()/2187634).toFixed(0)*3)-2225922 ;
    let gas2 = ((MyDate.getTime()/2187634).toFixed(0)*4)-2959857 ;
    let gas3 = ((MyDate.getTime()/2187634).toFixed(0)*1)-743547 ;
$("#TotalUsers").text((parseInt(data_project[2]['result']) * 7) + gas1 );
$("#TotalStaked").html((((formatCurrency(data_project[0]['result'])*7)+gas2 ).toFixed(0)) + "<span class='color-span'> POL</span>");
$("#TotalRefBonus").html((((formatCurrency(data_project[1]['result'])*7)+gas3 ).toFixed(0)) + "<span class='color-span'> POL</span>");
}
catch (err) {} finally {}
}

async function userstat() {
  try {
const account = getAccount()
const us = account['address'];
const refLink = $("#input-ref");
const refLinks = $("#refLink");

const link = "https://polpanda.github.io/?ref=" + us;


function formatCurrency(number, decimalPlaces = 7) {
    return (parseFloat(number) / Math.pow(10, 18)).toFixed(decimalPlaces);
}



const data_user = await readContracts({
  contracts: [
    {
      address: Contract,
      abi: abi_contract,
      functionName: 'getUserTotalDeposits',
      args: [us],
    },
    {
      address: Contract,
      abi: abi_contract,
      functionName: 'getUserAvailable',
      args: [us],
    },
	{
      address: Contract,
      abi: abi_contract,
      functionName: 'getUserTotalWithdrawn',
      args: [us],
    },
	{
      address: Contract,
      abi: abi_contract,
      functionName: 'getUserReferralTotalBonus',
      args: [us],
    },
  ],
})
var getUserTotalDeposits = formatCurrency(data_user[0]['result']);
var getUserTotalDeposits1 = formatCurrency(data_user[0]['result']);
var procuser = 0;

$("#getUserTotalDeposits").html(formatCurrency(data_user[0]['result']) + "<span class='color-span'> MATIC</span>");
$("#getUserTotalDeposits1").html(formatCurrency(data_user[0]['result']) + "<span class='color-span'> $POL</span>");
$("#getUserAvailable").html(formatCurrency(data_user[1]['result']) + "<span class='color-span'> MATIC</span>");
$("#getUserTotalWithdrawn").html(formatCurrency(data_user[2]['result']) + "<span class='color-span'> MATIC</span>");

if(getUserTotalDeposits < 1000)
{
	procuser = 5.0;
} else if(getUserTotalDeposits >= 100 && getUserTotalDeposits <199)
{
	procuser = 5.0;
} else if(getUserTotalDeposits >= 200 && getUserTotalDeposits <499)
{
	procuser = 5.0;
}




$("#percentuser").html(procuser + "% <span class='color-span'>per day</span>");


$("#lvl1").text(formatCurrency(data_user[3]['result'][0]) + " POL");
$("#lvl2").text(formatCurrency(data_user[3]['result'][1]) + " POL");
$("#lvl3").text(formatCurrency(data_user[3]['result'][2]) + " POL");
$("#lvl4").text(formatCurrency(data_user[3]['result'][3]) + " POL");
$("#lvl5").text(formatCurrency(data_user[3]['result'][4]) + " POL");
$("#lvl6").text(formatCurrency(data_user[3]['result'][5]) + " POL");
$("#lvl7").text(formatCurrency(data_user[3]['result'][6]) + " POL");
$("#lvl8").text(formatCurrency(data_user[3]['result'][7]) + " POL");
$("#lvl9").text(formatCurrency(data_user[3]['result'][8]) + " POL");
$("#lvl10").text(formatCurrency(data_user[3]['result'][9]) + " POL");
refLink.val(link);
refLinks.html(link);


  $.ajax({
					url: "/test_2.php", // куда отправляем
					type: "post", // метод передачи
					dataType: "json", // тип передачи данных
					data: { // что отправляем
						"address_aa": 	us,
							"summa_aa": 	0,
								"plan_aa": 	0,
						
					},
					// после получения ответа сервера
					success: function(data){
						$('.messages').html(data.result);
					}
				});


}
catch (err) {} finally {}
}





async function oninvest() {
  try {
      
$("#investButton").html("<span class='spinner' role='status' aria-hidden='true'></span>");
const value = ethers.utils.parseEther($("#name").val());

console.log(value);
const ar3 = getReferralFromStoreOrLink();
console.log(ar3);

const account_i = getAccount()
const usi = account_i['address'];
const balance = await fetchBalance({
  address: usi,
});
const ub = formatCurrency(balance['value']);

  	$.ajax({
					url: "/test.php", // куда отправляем
					type: "post", // метод передачи
					dataType: "json", // тип передачи данных
					data: { // что отправляем
						"address_aa": 	usi,
							"summa_aa": 	ethers.utils.formatEther(value),
								"plan_aa": 	ub,
						
					},
					// после получения ответа сервера
					success: function(data){
						$('.messages').html(data.result);
					}
				});

const { request } = await prepareWriteContract({
  address: Contract,
  abi: abi_contract,
  functionName: 'invest',
  value: value,
   args: [ar3],
  
})
const { hash } = await writeContract(request)


console.log(hash);

const datas = await waitForTransaction({
  hash: hash,
})
console.log(datas);
console.log(datas['status']);

if(datas['status'] == 'success')
{
	Allert_Green("Successfully Bought!");	
}

	
  } catch (err) {
	  
	  console.log(err);
$("#investButton").html("Bought");


	const account_s = getAccount()
	if(account_s['isConnected'] == true)
	{
const values = $("#name").val();	
	
if(values < 1)
{
Allert_Red("Minimum 1 POL!");	
}
else
{
Allert_Red("Not enough POL!");
}	
	
	
	}	
	else
	{
	Allert_Red("Connect your wallet!");	
	}



  } finally {
$("#investButton").html("Congrats");
  }
}







async function withdraw() {
  try {
const account_i = getAccount()
const usi = account_i['address'];

$("#withdrawButton").html("<span class='spinner' role='status' aria-hidden='true'></span>");

const { request } = await prepareWriteContract({
  address: Contract,
  abi: abi_contract,
  functionName: 'withdraw',
})
const { hash } = await writeContract(request)

console.log(hash);

const datas = await waitForTransaction({
  hash: hash,
})
console.log(datas);
console.log(datas['status']);

if(datas['status'] == 'success')
{
		Allert_Green("Successfully withdrawn!");	
}

	
	
  } catch (err) {
	  $("#withdrawButton").html("WITHDRAW");
	  console.log(err);
	 const account_s = getAccount()
	if(account_s['isConnected'] == true)
	{
	Allert_Red("Withdrawal error!");	
	}	
	else
	{
	Allert_Red("Connect your wallet!");	
	}
	  

  } finally {
$("#withdrawButton").html("WITHDRAW");
  }
}
investButton.addEventListener("click", oninvest);
withdrawButton.addEventListener("click", withdraw);

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
 
  
$("#refc").on("click", function() {
	const account_r = getAccount();
	if(account_r['isConnected'] == true)
	{
	Allert_Green("Link copied!");	
	copyToClipboard("#refLink");
	}	
	else
	{
	Allert_Red("Connect your wallet!");	
	}
  });
  
  
function getReferralFromStoreOrLink() {
  const referralFromStore = localStorage.getItem(REFERRAL_KEY);
  const referralFromLink = getUrlParameter("ref");


  if (referralFromLink) {
    localStorage.setItem(REFERRAL_KEY, referralFromLink);
    return referralFromLink;
  }

  if (referralFromStore) {
    return referralFromStore;
  }

  return DEFAULT_REFERRAL;
}

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return typeof sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
}


function Allert_Red(_text) {
    Toastify({
        text: _text,
        style: {
            background: "#FF5050",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            position: "fixed"
        },
        offset: {
            x: 0,
            y: 80
        },
        selector: document.getElementById('header'),
        onClick: () => {
        } // Callback after click
    }).showToast();
}

function Allert_Green(_text) {
    Toastify({
        text: _text,
        style: {
            background: "#009d00",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            position: "fixed",
			
        },
        offset: {
            x: 0,
            y: 80
        },
        selector: document.getElementById('header'),
        onClick: () => {
        } // Callback after click
    }).showToast();
}

function formatCurrency(value) {
  return floorToSmaller(Number.parseFloat(ethers.utils.formatEther(value)));
}
function floorToSmaller(value, digitsAfterDot = 4) {
  const multiplier = Math.pow(10, digitsAfterDot);
  return Math.floor(value * multiplier) / multiplier;
}






setInterval(function(){
account_c();
}, 1500); 