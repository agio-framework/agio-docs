const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const {
    Container,
    GridBlock,
    // MarkdownBlock
} = CompLibrary;


class DiagonalDivisor extends React.Component {

    render() {
        const colors = [].concat(this.props.colors);
        const direction = this.props.direction || 'right';

        const height = colors.length !== 2 ? 0 : this.props.height || 90;
        const background = `linear-gradient(to top ${direction},${colors[0]} 0,${colors[0]} 50%,${colors[1]} 0,${colors[1]});`

        return (
            <div>
                <div style={{height, background}}></div>
            </div>
        );
    }

}


class HomeSplash extends React.Component {

    render() {

        const { siteConfig } = this.props;

        const HomeWrapper = props => (
            <div
                className="wrapperHero"
                style={{backgroundColor: siteConfig.colors.primaryColor, height: '400px'}}>
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper animated fadeIn faster">
                        {props.children}
                    </div>
                </div>
            </div>
        );


        const HomeWrapperLink = props => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <div className="homeContainer">
                <HomeWrapper>

                    <div style={{paddingTop: 50}} className="animated fadeIn">
                        <p style={{fontSize: '2.5em'}}>{siteConfig.tagline}</p>
                        <p style={{fontSize: '1em', maxWidth: '600px', margin: 'auto', wordSpacing: 1.3}}>
                            Agio is a smaller framework to build HTTP APIs with NodeJS and Typescript. Connect to MongoDB and SQL databases, build controllers, services, validators and serve faster.
                        </p>
                    </div>

                    <div style={{paddingTop: 40, display: 'block'}}>
                        <HomeWrapperLink href="/docs/get-started">Get Started</HomeWrapperLink>
                    </div>

                </HomeWrapper>
            </div>

        );

    }
}

class Index extends React.Component {

    render() {

        const { config: siteConfig } = this.props;
        const { colors } = siteConfig;

        return (
            <div>

                <HomeSplash siteConfig={siteConfig}/>
                <DiagonalDivisor colors={[colors.darkColor, colors.primaryColor]}></DiagonalDivisor>

                <div className="mainContainer index">
                    <Container>

                    <GridBlock
                        align="left"
                        layout="twoColumn"
                        className="routers-example-column animated slideInUp"
                        contents={[
                            {
                                content: `
~~~typescript
@Injectable();
@Controller('dogs')
export class DogsController {

    constructor(private dogsService: DogsService) {}

    @Post('/', [DogsValidator])
    public async createDog(req: Request) {

        const await newDog = this.dogsService.create(req.body);
        req.sendResponse(newDog, HTTP_STATUS.CREATED);

    }

    @Get('/:id', [CacheMiddleware])
    public async getById(req: Request) {

        const dog = await this.dogsService.getById(req.params.id);
        req.sendResponse(dog, dog ? HTTP_STATUS.OK : HTTP_STATUS.NOT_FOUND);

    }

}
~~~
`,
                            },
                            {
                                content: `
~~~json
{
    "data": {
        "name": "R2 Dog 2",
        "breed": "robodog",
        "owner": {
            "name": "Anakin Skywalker"
        }
    },
    "code": 200,
    "metadata": {
        // ...
    }
}
~~~
`,
                            }
                        ]}/>

                        <GridBlock
                            align="center"
                            layout="threeColumn"
                            className="features-about animated fadeIn slow"
                            contents={[
                            {
                                title: 'Simplified routing',
                                content: 'Agio uses Express to provide routing, but brings a simplified way to code routes with decorators that represent HTTP verbs and build the handlers.'
                            },
                            {
                                title: 'Validators',
                                content: 'Write efficient validation schemes using the javascript object and use them as middleware to validate any request. They will be validated with Joi.'
                            },
                            {
                                title: 'Databases',
                                content: 'Connect your application to MongoDB and many SQL databases. Agio supports multiple databases and uses Mongoose and Sequelize to create and connect models that can be injected using decorators.'
                            },
                        ]}/>

                        <div className="powered-by">
                            <h2>Powered by community</h2>
                            <p>Thank you very much to all open source projects that drive Agio</p>
                            {/* <img src="img/powered-by.png"/> */}
                        </div>

                    </Container>
                </div>
            </div>
        );
    }

}

module.exports = Index;
