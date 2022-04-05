import axios from "axios";

const handleUploadImage = (event: any) => {
    console.log(event.target.files);
    const formData = new FormData();
    formData.append("file", event.target.files[0], event.target.files[0].name);
    axios.put("http://47.103.210.124:7000/user/newShare", formData);
};

const Footer = () => {
    return (
        <div>
            <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleUploadImage}
            />
        </div >
    )
}

export default Footer