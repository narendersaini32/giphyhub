import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const Wave = styled.div``;
class Share extends PureComponent {
  state = { showAll: false };

  toggleShowAll = () => {
    this.setState(({ showAll }) => {
      return {
        showAll: !showAll
      };
    });
  };

  render() {
    const { url } = this.props;
    const { showAll } = this.state;
    return (
      <div className="shareMain" id="shareMain">
        <a
          className="resp-sharing-button__link"
          href={`https://facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          className="resp-sharing-button__link"
          href={`whatsapp://send?text=http://giphyhub.netlify.com%20${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 24 24">
                <path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z" />
              </svg>
            </div>
          </div>
        </a>
        <a
          className="resp-sharing-button__link"
          href={`https://telegram.me/share/url?text=http://giphyhub.netlify.com&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 23.5c6.35 0 11.5-5.15 11.5-11.5S18.35.5 12 .5.5 5.65.5 12 5.65 23.5 12 23.5zM2.505 11.053c-.31.118-.505.738-.505.738s.203.62.513.737l3.636 1.355 1.417 4.557a.787.787 0 0 0 1.25.375l2.115-1.72a.29.29 0 0 1 .353-.01L15.1 19.85a.786.786 0 0 0 .746.095.786.786 0 0 0 .487-.573l2.793-13.426a.787.787 0 0 0-1.054-.893l-15.568 6z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>
        <a
          className="resp-sharing-button__link"
          href={`https://twitter.com/intent/tweet/?text=http://giphyhub.netlify.com&url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
            <div
              aria-hidden="true"
              className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z" />
              </svg>
            </div>
          </div>
        </a>

        {showAll ? (
          <Fragment>
            <a
              className="resp-sharing-button__link"
              href={`https://plus.google.com/share?url=${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--google resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.65 8.6c-.02-.66-.3-1.3-.8-1.8S10.67 6 9.98 6c-.63 0-1.2.25-1.64.68-.45.44-.68 1.05-.66 1.7.02.68.3 1.32.8 1.8.96.97 2.6 1.04 3.5.14.45-.45.7-1.05.67-1.7zm-2.5 5.63c-2.14 0-3.96.95-3.96 2.1 0 1.12 1.8 2.08 3.94 2.08s3.98-.93 3.98-2.06c0-1.14-1.82-2.1-3.98-2.1z" />
                    <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm-1.84 19.4c-2.8 0-4.97-1.35-4.97-3.08s2.15-3.1 4.94-3.1c.84 0 1.6.14 2.28.36-.57-.4-1.25-.86-1.3-1.7-.26.06-.52.1-.8.1-.95 0-1.87-.38-2.57-1.08-.67-.68-1.06-1.55-1.1-2.48-.02-.94.32-1.8.96-2.45.65-.63 1.5-.93 2.4-.92V5h3.95v1h-1.53l.12.1c.67.67 1.06 1.55 1.1 2.48.02.93-.32 1.8-.97 2.45-.16.15-.33.3-.5.4-.2.6.05.8.83 1.33.9.6 2.1 1.42 2.1 3.56 0 1.73-2.17 3.1-4.96 3.1zM20 10h-2v2h-1v-2h-2V9h2V7h1v2h2v1z" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="resp-sharing-button__link"
              href={`https://www.tumblr.com/widgets/share/tool?posttype=link&title=http://giphyhub.netlify.com&caption=http://giphyhub.netlify.com&content=${url}&canonicalUrl=${url}&shareSource=tumblr_share_button`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--tumblr resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    enableBackground="new 0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M15.492,17.616C11.401,19.544,9.5,17,9.5,14.031 V9.5h-2V8.142c0.549-0.178,1.236-0.435,1.627-0.768c0.393-0.334,0.707-0.733,0.943-1.2c0.238-0.467,0.401-0.954,0.49-1.675H12.5v3h2 v2h-2v3.719c0,2.468,1.484,2.692,2.992,1.701V17.616z" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="resp-sharing-button__link"
              href={`mailto:?subject=http://giphyhub.netlify.com&body=${url}`}
              target="_self"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--email resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm8 16c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v8z" />
                    <path d="M17.9 8.18c-.2-.2-.5-.24-.72-.07L12 12.38 6.82 8.1c-.22-.16-.53-.13-.7.08s-.15.53.06.7l3.62 2.97-3.57 2.23c-.23.14-.3.45-.15.7.1.14.25.22.42.22.1 0 .18-.02.27-.08l3.85-2.4 1.06.87c.1.04.2.1.32.1s.23-.06.32-.1l1.06-.9 3.86 2.4c.08.06.17.1.26.1.17 0 .33-.1.42-.25.15-.24.08-.55-.15-.7l-3.57-2.22 3.62-2.96c.2-.2.24-.5.07-.72z" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="resp-sharing-button__link"
              href={`https://pinterest.com/pin/create/button/?url=${url}&media=${url}&description=http://giphyhub.netlify.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--pinterest resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm1.4 15.56c-1 0-1.94-.53-2.25-1.14l-.65 2.52c-.4 1.45-1.57 2.9-1.66 3-.06.1-.2.07-.22-.04-.02-.2-.32-2 .03-3.5l1.18-5s-.3-.6-.3-1.46c0-1.36.8-2.37 1.78-2.37.85 0 1.25.62 1.25 1.37 0 .85-.53 2.1-.8 3.27-.24.98.48 1.78 1.44 1.78 1.73 0 2.9-2.24 2.9-4.9 0-2-1.35-3.5-3.82-3.5-2.8 0-4.53 2.07-4.53 4.4 0 .5.1.9.25 1.23l-1.5.82c-.36-.64-.54-1.43-.54-2.28 0-2.6 2.2-5.74 6.57-5.74 3.5 0 5.82 2.54 5.82 5.27 0 3.6-2 6.3-4.96 6.3z" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="resp-sharing-button__link"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=http://giphyhub.netlify.com&summary=http://giphyhub.netlify.com&source=${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    enableBackground="new 0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M9.5,16.5h-2v-7h2V16.5z M8.5,7.5 c-0.553,0-1-0.448-1-1c0-0.552,0.447-1,1-1s1,0.448,1,1C9.5,7.052,9.053,7.5,8.5,7.5z M18.5,16.5h-3V13c0-0.277-0.225-0.5-0.5-0.5 c-0.276,0-0.5,0.223-0.5,0.5v3.5h-3c0,0,0.031-6.478,0-7h3v0.835c0,0,0.457-0.753,1.707-0.753c1.55,0,2.293,1.12,2.293,3.296V16.5z" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="resp-sharing-button__link"
              href={`https://reddit.com/submit/?url=${url}&resubmit=true&title=http://giphyhub.netlify.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="9.391" cy="13.392" r=".978" />
                    <path d="M14.057 15.814c-1.14.66-2.987.655-4.122-.004-.238-.138-.545-.058-.684.182-.13.24-.05.545.19.685.72.417 1.63.646 2.568.646.93 0 1.84-.228 2.558-.642.24-.13.32-.44.185-.68-.14-.24-.445-.32-.683-.18zM5 12.086c0 .41.23.78.568.978.27-.662.735-1.264 1.353-1.774-.2-.207-.48-.334-.79-.334-.62 0-1.13.507-1.13 1.13z" />
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm6.673 14.055c.01.104.022.208.022.314 0 2.61-3.004 4.73-6.695 4.73s-6.695-2.126-6.695-4.74c0-.105.013-.21.022-.313C4.537 13.73 4 12.97 4 12.08c0-1.173.956-2.13 2.13-2.13.63 0 1.218.29 1.618.757 1.04-.607 2.345-.99 3.77-1.063.057-.803.308-2.33 1.388-2.95.633-.366 1.417-.323 2.322.085.302-.81 1.076-1.397 1.99-1.397 1.174 0 2.13.96 2.13 2.13 0 1.177-.956 2.133-2.13 2.133-1.065 0-1.942-.79-2.098-1.81-.734-.4-1.315-.506-1.716-.276-.6.346-.818 1.395-.88 2.087 1.407.08 2.697.46 3.728 1.065.4-.468.987-.756 1.617-.756 1.17 0 2.13.953 2.13 2.13 0 .89-.54 1.65-1.33 1.97z" />
                    <circle cx="14.609" cy="13.391" r=".978" />
                    <path d="M17.87 10.956c-.302 0-.583.128-.79.334.616.51 1.082 1.112 1.352 1.774.34-.197.568-.566.568-.978 0-.623-.507-1.13-1.13-1.13z" />
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="resp-sharing-button__link"
              href={`https://www.xing.com/app/user?op=share;url=${url};title=http://giphyhub.netlify.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--xing resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM7.8 14.5h-3L7 11.3 5.3 8.5h3l1.8 2.8L8 14.5zm9 5h-3.4l-3-5.5L15 5.5h3.2L13.6 14l3 5.5z" />
                  </svg>
                </div>
              </div>
            </a>

            <a
              className="resp-sharing-button__link"
              href={`https://news.ycombinator.com/submitlink?u=${url}&t=http://giphyhub.netlify.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--hackernews resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <path
                      fillRule="evenodd"
                      d="M128 256c70.692 0 128-57.308 128-128C256 57.308 198.692 0 128 0 57.308 0 0 57.308 0 128c0 70.692 57.308 128 128 128zm-9.06-113.686L75 60h20.08l25.85 52.093c.397.927.86 1.888 1.39 2.883.53.994.995 2.02 1.393 3.08.265.4.463.764.596 1.095.13.334.262.63.395.898.662 1.325 1.26 2.618 1.79 3.877.53 1.26.993 2.42 1.39 3.48 1.06-2.254 2.22-4.673 3.48-7.258 1.26-2.585 2.552-5.27 3.877-8.052L161.49 60h18.69l-44.34 83.308v53.087h-16.9v-54.08z"
                    />
                  </svg>
                </div>
              </div>
            </a>
            <a
              className="resp-sharing-button__link"
              href={`http://vk.com/share.php?title=http://giphyhub.netlify.com&url=${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resp-sharing-button resp-sharing-button--vk resp-sharing-button--small">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 6.352 5.15 11.5 11.5 11.5 6.352 0 11.5-5.148 11.5-11.5C23.5 5.65 18.352.5 12 .5zm8.11 16.82h-2.603c-.244 0-.48-.094-.658-.26l-1.98-1.862c-.118-.112-.276-.175-.438-.175-.355 0-.646.287-.646.643v1c0 .36-.292.654-.654.654h-1.655c-3.935 0-7.385-6.898-8.185-9.093-.018-.052-.028-.105-.028-.16.002-.247.204-.445.452-.445h2.637c.24 0 .456.14.556.355.57 1.42 1.31 2.764 2.2 4.004.126.14.304.217.49.214.357-.006.64-.3.63-.656-.014-.894-.034-1.958-.034-2.328 0-1.493-1.106-1.313-1.106-1.313.355-.49.94-.76 1.543-.717h2.182c.537 0 .974.435.974.972v3.093c0 .896.646 1.502 1.646-.43.37-.718 1.527-2.848 1.527-2.848.114-.214.337-.347.577-.347h2.9c1.323 0 .358 1.502-.175 2.21-.392.52-1.31 1.727-1.873 2.47-.267.353-.238.845.07 1.165 0 0 1.74 1.834 2.22 2.31.685.673.685 1.545-.57 1.545z" />
                  </svg>
                </div>
              </div>
            </a>
            <Wave id="wave" onClick={this.toggleShowAll}>
              <ExpandLess />
            </Wave>
          </Fragment>
        ) : (
          <Wave id="wave" onClick={this.toggleShowAll}>
            <ExpandMore />
          </Wave>
        )}
      </div>
    );
  }
}

Share.propTypes = {
  url: PropTypes.string.isRequired
};

export default Share;
