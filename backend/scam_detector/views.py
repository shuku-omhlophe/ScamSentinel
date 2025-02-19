from rest_framework.decorators import api_view
from rest_framework.response import Response
from web3 import Web3
from .utils import analyze_wallet, analyze_smart_contract

# Connect to Ethereum (or any EVM-compatible chain)
INFURA_URL = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
w3 = Web3(Web3.HTTPProvider(INFURA_URL))

@api_view(['GET'])
def check_wallet(request, address):
    """Analyzes a crypto wallet address for scam activity."""
    if not Web3.is_address(address):
        return Response({"error": "Invalid Ethereum address"}, status=400)
    
    analysis_result = analyze_wallet(address)
    return Response(analysis_result)

@api_view(['GET'])
def check_smart_contract(request, contract_address):
    """Analyzes a smart contract for security vulnerabilities."""
    if not Web3.is_address(contract_address):
        return Response({"error": "Invalid contract address"}, status=400)
    
    analysis_result = analyze_smart_contract(contract_address)
    return Response(analysis_result)
