
#  SEMANTIC UI - INTERFACES GRAFICA


## Install

    - Semantic UI React proporciona componentes React mientras que Semantic UI proporciona temas como hojas de estilo CSS. Instale los componentes React y elija un tema que se adapte a sus necesidades.


### Opción 1: Administrador de paquetes

    - Los componentes de reacción se pueden instalar mediante yarno npm:

        
        $  yarn add semantic-ui-react semantic-ui-css

        ## Or NPM

        $  npm install semantic-ui-react semantic-ui-css


    - Después de la instalación, importe el archivo CSS minificado en el archivo de entrada de su aplicación:

            <Code>
            
            import 'semantic-ui-css/semantic.min.css'

        El paquete Semantic UI CSS se sincroniza automáticamente con el repositorio principal de Semantic UI para proporcionar una versión ligera de CSS de Semantic UI.

        Si está utilizando TypeScript, no necesita instalar nada, los paquetes están incluidos en el paquete.


### Option 2: CDN (no bundler)

    - Esta es la forma más rápida de comenzar, simplemente agregue este enlace y la etiqueta del script a <head>su index.htmlarchivo.

    
    <link
    async
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
    />

    <script
    async
    src="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js"
    ></script>






















