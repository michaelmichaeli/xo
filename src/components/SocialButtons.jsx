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

export const SocialButtons = ({roomId}) => {
    // const [shareMenuOpen, setShareMenuOpen] = useState(false)
    const shareLink = `http://localhost:3000/multiplayer/${roomId}`
    const title = 'Join my game of Tic Tac Toe'
    return <div className="share flex align-center wrap">
        {/* <button
            onClick={() => setShareMenuOpen(!shareMenuOpen)}
        >
            <ShareIcon /> <p>Share</p>
        </button> */}
        <ShareIcon />
        <p>Share:</p>
        {/* {shareMenuOpen && */}
            {/* <div className="social flex justify-center align-center "> */}

            <FacebookShareButton
                url={shareLink}
                quote={title}
                className="share-button"
            >
                <FacebookIcon
                    size={"2rem"} // You can use rem value isntead of numbers
                    round
                />
            </FacebookShareButton>

            <TwitterShareButton
                url={shareLink}
                title={title}
                className="share-button"
            >
                <TwitterIcon size={"2rem"} round />
            </TwitterShareButton>

            <WhatsappShareButton
                url={shareLink}
                title={title}
                separator=": "
                className="share-button"
            >
                <WhatsappIcon size={"2rem"} round />
            </WhatsappShareButton>

            <LinkedinShareButton
                url={shareLink}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className="share-button"
            >
                <LinkedinIcon size={"2rem"} round />
            </LinkedinShareButton>

            <EmailShareButton
                url={shareLink}
                subject={title}
                body="Check out this cool game: "
                className="share-button"
            >
                <EmailIcon size={"2rem"} round />
            </EmailShareButton>

            {/* <a href=""><LinkIcon /></a>
            <a href=""><WhatsAppIcon /></a>
            <a href=""><FacebookIcon /></a>
            <a href=""><TwitterIcon /></a>
            <a href="mailto:"><MailOutlineIcon /></a> */}
        {/* </div> */}
        {/* } */}
    </div>
}