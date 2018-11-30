const apiController = () => {

  const getRequestHeader = (req,res) => {

    const { headers: { 'accept-language': acceptLanguage, 'user-agent': userAgent}, ip } = req;

    const requestHeader = {

      "ipaddress": ip,
      "language": acceptLanguage,
      "software": userAgent
    }

    res.json(requestHeader)

  }

  return {

    getRequestHeader

  }

}



module.exports = apiController();