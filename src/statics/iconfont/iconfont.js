import { createGlobalStyle } from 'styled-components';

export const GlobalStyleIconFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1556075139252'); /* IE9 */
  src: url('./iconfont.eot?t=1556075139252#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWMAAsAAAAACpQAAAU9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqHXIZRATYCJAMcCxAABCAFhG0HZxswCcgehXEbHYpTX30rlYmMgFrLemChdgPskGQ8gQNUgCoR/lRslHnh39gXioV6tT/PpvaQ2qcuzNJtd1dxD1SMEEiokRImYh45cU8CBIBff69p6njA6gLF5b3U2jBAmXDGMwFq/Vqx7h84B3InyKcBu9rlZ4IeJqAx5XXYfklVE7jKlE0B4V0ycOAaMsg5jKBWlyknsxO2HJzUcQH+GMCX/fPhHyTkCqIigbLz9K1YD3k/nT/fREx3TNdukkDYng3CORI2gEz4THX0gHATGwjNZz7pEhhQi8q2Luv1ecDnb3ye8vkmhwOEu5XhYEB1UM7uH14hiYQSSNEH+m2o5Kcu8JVe0AlQBkAnQ/kGdAooU6CToNyEBhFU5okBTIKwBhC+gaLasNcPyLIoiUMkZC6Y5ezuThKurgGUV7D7Pl6RGtl94UHMacYhymPRASB7+3UUhroQtFfuuIeIMIoCA+t8S6aFoQki8msP2/yvMJ/4nO1zxv4Fa/1Ma/l0osXSZLVq7XbWZjO28c1ME+uFGPcm1Eu1tK6NRJuDm7lL1CKAJqDraOFTbAbLzkALs7Sn98P0A9SiWxjGsoZYdsYMxKxdDU1jeu364eZtdz8MDWzbGGYIYjcdOndmhPaC9XXeZmO6wB0NWyydPb5uwsJAZu2MQ/sCtGs2rF/tPwktXBvUtm5RQMua9QiV2WP5mNlzLuiItdxqZ68pxZH6XpRV+8Aaf3qk/1Fbho1Blqb7ljhq0Rr/5tULA1vXbqJewl5vrfdJXWTfJGyEUq0M6pVoZcOIvT/vpRKqq8hXpanaYHnNmmiNH63WVCuVTo7GXKWprIxJFVtaHZBWK9oNGn2WJhoc094iaZp8S0UmNiR+lceug2eJX34hID3LYkjY3Bd3js6de/SoRrwJjm4CXBdLX4wseiF4OnSFtp6cWi1eoJNy7OQ/OWb1Tlos5pQfI49iJI8OqjIv49NOVn0UEvBP6IifRkTCf+5bTfi1RUmtGI7NrwHv3Lf0C/nigwWnyt/ZNHg2fFJQMBV4KvTL8sTWHX/0jAmZV10SUFMMzyauIe7eIdaoyESGZrWfvXrKRHzXLhzSiSyGAd/JIiJa4CfIY97fv20IHjp9/j+/MfHcX9Mh4Y8ktK1sEdEa3LoQK1tBGaMqBk2VUatSQ3W18/3SvnlcV0h2Dr8xrKJ47KKBiGJjXxFdO5wFdAP830vNdb/49fhsrMi/XRBZBm7HkD8VXVu5w9iaE+4o3xL/4w7QOYjrBNDNSC3EFIDuh/Q2kQXQPU6/EyFP8+/4OHrMd3ll/eZKkQA/Pvtllt3QTc+QegCPpFJp4bPrzMPg3oq/YsVY5XcfXTlvrxVQOeHJlZ7QaPDEeka8355qvHQpQW3ch6gyCUltgZzpG1BobUKptgWNdaXnW6MUhJDdgDVzGAiGHINowHdIhjwhZ/p7UJjwHZSGIqBxHfxu2FpKQoWKwKmCntZNoCVeHhA1s4qc8gbBMKaPU4Jim8kIilkK0/ExcdF0qTAgKG3sMY81JKiqSIuK3E+XMI8T+vpk2qTIPQKvxhhV1ZQRGyumfVIML/cDskch4KgEejSdCWgSnmyAaI5WodjlGwgMxujDUXL6fngZAoWZND0tXoy4EuRSxUCpvmOpNRvLIIFKMRFNFEpl/WglZBP0qQkZzZS+rIeAp4phrBEzyRBLg8Syipj+Vf3HeQwaysdVAccIjMScMGfMBXOF9tFk0svjBvpkTu+ql8y8PFZQ8HzOfVfu/gZvFPheacCtmjMMSKIkKKTZJA0AAAAAAA==') format('woff2'),
  url('./iconfont.woff?t=1556075139252') format('woff'),
  url('./iconfont.ttf?t=1556075139252') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1556075139252#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 5px;
}

.iconappdownload:before {
  content: "\e60f";
}

.icondiscover:before {
  content: "\e69b";
}

.iconAa:before {
  content: "\e636";
}

.iconicon-checkin:before {
  content: "\e615";
}

.iconMagnifier:before {
  content: "\e62d";
}

.iconspin:before {
  content: "\e606";
}
`


