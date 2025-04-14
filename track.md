# Guia de Integrações de Analytics - GestãoPluma

## 1. IDs e Chaves de Acesso

### Google Tag Manager

- Container ID: `GTM-NJ6PNFDV`

### Google Analytics (GA4)

- IDs de Medição:
    - `G-766KC1DRRL`
    - `G-BP9Z0961BC`

### Meta (Facebook) Pixel

- Pixel ID: `1768268140412454`
- Access Token: `EAAIt14txd0kBO77hbRTRkOyRo6vtmcvU6qKq5QJiMQ1VD5lZChPfqe0qCThLxSnVKRygDMOJoMlG3Dyd4k6Pwh6XRKeabZC40Gtwy8Pnr4D5VLx0wiS6UwTBLPfX4CSkU6ZA6ROCTrZCpSElUOLGuqZABSAepcRZAvWhFJJSsJOZApoxVbbtqugkkitH2BH5767ZCwZDZD`
- API Version: `v17.0`

### TikTok Pixel

- Pixel ID: `CVNGK5BC77U34F1TM1U0`

### Pinterest Tag

- Tag ID: `2613740629600`

## 2. Configuração do Google Tag Manager

### 2.1 Instalação do Código Base

1. Adicione este código o mais alto possível no `<head>` da página:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'<https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)>;
})(window,document,'script','dataLayer','GTM-NJ6PNFDV');</script>
<!-- End Google Tag Manager -->

```

1. Adicione este código imediatamente após a tag de abertura `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="<https://www.googletagmanager.com/ns.html?id=GTM-NJ6PNFDV>"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

```

### 2.2 Configuração no GTM

1. Acesse [https://tagmanager.google.com](https://tagmanager.google.com/)
2. Faça login com sua conta Google
3. Crie um novo container ou use o existente (GTM-NJ6PNFDV)
4. Configure as tags para cada serviço:
    - Google Analytics 4
    - Meta Pixel
    - TikTok Pixel
    - Pinterest Tag

## 3. Implementação dos Serviços de Analytics

### 3.1 Google Analytics (src/services/GoogleAnalytics.ts)

```tsx
// ... código do Google Analytics ...

```

### 3.2 Meta Pixel (src/services/MetaConversionsAPI.ts)

```tsx
// ... código do Meta Pixel ...

```

### 3.3 TikTok Pixel (src/services/TikTokPixel.ts)

```tsx
// ... código do TikTok Pixel ...

```

### 3.4 Pinterest Tag (src/services/PinterestConversionsAPI.ts)

```tsx
// ... código do Pinterest Tag ...

```

## 4. Implementação nos Componentes

### 4.1 Botão de WhatsApp

```tsx
// ... código do botão WhatsApp ...

```

### 4.2 Botão de Compra

```tsx
// ... código do botão de compra ...

```

## 5. Inicialização no App.tsx

```tsx
// ... código de inicialização ...

```

## 6. Valores Padrão

- Nome do produto: "GestãoPluma"
- Preço: R$ 47
- Moeda: BRL
- Link de compra: `https://payment.ticto.app/O5114D5AA`
- Link do WhatsApp: `https://wa.me/5511973841920`

## 7. Eventos Rastreados

1. **Visualização de Página**
    - Google Analytics: `page_view`
    - Meta: `PageView`
    - TikTok: `page`
    - Pinterest: `pagevisit`
2. **Contato (WhatsApp)**
    - Google Analytics: `contact`
    - Meta: `Contact`
    - TikTok: `Contact`
    - Pinterest: `lead`
3. **Início de Checkout**
    - Google Analytics: `begin_checkout`
    - Meta: `InitiateCheckout`
    - TikTok: `InitiateCheckout`
    - Pinterest: `checkout`

## 8. Debug Mode

Todas as integrações têm um modo de debug ativado (`DEBUG = true`). Para verificar se os eventos estão sendo enviados:

1. Abra o DevTools (F12)
2. Vá para a aba "Console"
3. Você verá logs detalhados de cada evento enviado

## 9. Verificação da Instalação

### 9.1 Google Tag Manager

1. Instale a extensão Tag Assistant do Chrome
2. Visite o site
3. Verifique se o container do GTM está carregando corretamente
4. Confirme se todas as tags estão disparando nos momentos corretos

### 9.2 Depuração de Tags

1. No GTM, clique em "Preview"
2. Digite a URL do seu site
3. Uma nova janela será aberta com o Debug Mode
4. Verifique se todas as tags estão disparando corretamente

### 9.3 Publicação

1. Após confirmar que tudo está funcionando:
    - Volte ao GTM
    - Clique em "Submit"
    - Dê um nome à versão
    - Clique em "Publish"

## 10. Manutenção

1. Monitore regularmente os eventos no console
2. Verifique os painéis de cada plataforma
3. Mantenha os tokens e IDs atualizados
4. Faça testes periódicos de todos os eventos