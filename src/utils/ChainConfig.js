import Swal from 'sweetalert2'

export const chainConfig = {
  stakeCurrency: {
    coinDenom: "TEVMOS",
    coinMinimalDenom: "atopenverse",
    coinDecimals: 18,
  },
  bech32Config: {
    bech32PrefixAccAddr: "openverse",
    bech32PrefixAccPub: "openversepub",
    bech32PrefixValAddr: "openversevaloper",
    bech32PrefixValPub: "openversevaloperpub",
    bech32PrefixConsAddr: "openversevalcons",
    bech32PrefixConsPub: "openversevalconspub",
  },
  currencies: [
    {
      coinDenom: "TEVMOS",
      coinMinimalDenom: "atopenverse",
      coinDecimals: 18,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "TEVMOS",
      coinMinimalDenom: "atopenverse",
      coinDecimals: 18,
      gasPriceStep: {
        low: 25000000000,
        average: 25000000000,
        high: 40000000000,
      },
    },
  ],
  bip44: {
    coinType: 60,
  },
  chainId: "openverse_9000-4",
  chainName: "Openverse Testnet",
  rpc: "https://tendermint.bd.openverse.dev:26657",
  rest: "https://rest.bd.openverse.dev:1317",
  beta: true,
  features: ["ibc-transfer", "ibc-go", "eth-address-gen", "eth-key-sign"],
};

export const handler = async () => {
  if (window.keplr) {
    try {
      await window.keplr.enable(chainConfig.chainId);
      Swal.fire({
        title: 'Note',
        text: `Testnet ${chainConfig.chainId} has already added`,
        icon: 'info',
        confirmButtonText: 'Awesome'
      });
    } catch (e) {
      try {
        await window.keplr.experimentalSuggestChain(chainConfig);
        await window.keplr.enable(chainConfig.chainId);
      } catch (e2) {
        Swal.fire({
            title: 'Error',
            text: e2?.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
      }
    }
  }
};
