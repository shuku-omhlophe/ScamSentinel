import re

def is_valid_tx_hash(tx_hash):
    """Checks if a given transaction hash is a valid Ethereum-style hash."""
    pattern = r"^0x[a-fA-F0-9]{64}$"
    return bool(re.match(pattern, tx_hash))

def normalize_address(address):
    """Converts an Ethereum address to a standardized lowercase format."""
    if address.startswith("0x") and len(address) == 42:
        return address.lower()
    return None
