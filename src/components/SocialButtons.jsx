import ShareIcon from '@material-ui/icons/Share';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    EmailIcon,
} from "react-share";

export const SocialButtons = ({ roomId }) => {

    const shareLink = `http://localhost:3000/multiplayer/${roomId}`
    const title = 'Join my game of Tic Tac Toe'
    return <div className="share flex column align-center between">
        <div className="title flex align-center">
            <ShareIcon fontSize="small"/>
            <p>Invite Your Friends</p>
        </div>
        <div className="content  flex align-center wrap">
            <FacebookShareButton
                url={shareLink}
                quote={title}
                className="share-button"
            >
                <FacebookIcon
                    size={"3rem"} // You can use rem value isntead of numbers
                    round
                />
            </FacebookShareButton>

            <TwitterShareButton
                url={shareLink}
                title={title}
                className="share-button"
            >
                <TwitterIcon size={"3rem"} round />
            </TwitterShareButton>

            <WhatsappShareButton
                url={shareLink}
                title={title}
                separator=": "
                className="share-button"
            >
                <WhatsappIcon size={"3rem"} round />
            </WhatsappShareButton>

            <LinkedinShareButton
                url={shareLink}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className="share-button"
            >
                <LinkedinIcon size={"3rem"} round />
            </LinkedinShareButton>

            <EmailShareButton
                url={shareLink}
                subject={title}
                body="Check out this cool game: "
                className="share-button"
            >
                <EmailIcon size={"3rem"} round />
            </EmailShareButton>
        </div>
    </div>
}