const React = require('react');

class Footer extends React.Component {

    render() {
        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <a href={this.props.config.baseUrl} className="nav-home">
                        {this.props.config.footerIcon && (
                            <img
                                src={this.props.config.baseUrl + this.props.config.footerIcon}
                                alt={this.props.config.title}
                                width="66"
                                height="58"
                            />
                        )}
                    </a>

                    <div>
                        <h5>Docs</h5>

                        <a href="docs/get-started">
                            Getting Started
                        </a>

                    </div>

                    <div>
                        <h5>CLI</h5>

                        <a href="docs/cli">
                            Install
                        </a>

                    </div>

                    <div>
                        <h5>More</h5>

                        <a href="https://github.com/">GitHub</a>

                    </div>
                </section>

                <a
                    href="https://opensource.facebook.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="fbOpenSource">
                    <img
                        src="/img/oss_logo.png"
                        alt="Facebook Open Source"
                        width="170"
                        height="45"
                    />
                </a>

                <section className="copyright">
                    {this.props.config.copyright}
                </section>

            </footer>
        );
    }
}

module.exports = Footer;
