import Router from "next/router"
import * as yup from "yup"
import { Formik } from "formik"
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import "bootstrap-icons/font/bootstrap-icons.css"
import { SearchSharp } from "@mui/icons-material";
import { useRouter } from "next/router"

const SearchFormValidate = ({ submitSearchQuery, search_bar }) => {
  const router = useRouter()
  const [search, setSearch] = useState(router.query.keyword)

  function handleSubmit() {
    if (search) {
      submitSearchQuery(search)
      Router.push({
        pathname: "/search",
        query: { keyword: search },
      })
    }
  }

  return (
    <>

      {/* initialValues={{ search: "" }} z
      onSubmit={(values, { setSubmitting }) => {
        submitSearchQuery(values["search"])

        Router.push({
          pathname: "/search",
          query: { keyword: values["search"] },
        })
      }}
      validationSchema={yup.object().shape({
        search: yup.string().required("Required"),
      })}>
      {(props) => {
        const {
          values,
          handleChange,
          errors,
          touched,
          isSubmitting,
          handleBlur,
          handleSubmit,
        } = props
        return ( */}
      <div>
        <div className={search_bar == true ? "search-fluid" : "search"}>
          {/* {error ? <span className="input-feedback">{error}</span> : ""} */}


          <FormControl fullWidth size="small">

            <OutlinedInput
              id="outlined-adornment-amount"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  ev.preventDefault();
                  handleSubmit()
                }
              }}
              endAdornment={<InputAdornment position="end">
                <IconButton
                  aria-label="search"
                  edge="end"
                  onClick={handleSubmit}
                >
                  <SearchSharp sx={{ color: '#0e9d47' }} />
                </IconButton>
              </InputAdornment>}
              placeholder="Search Plants.."
            />
          </FormControl>
        </div>
      </div>

    </>
  )
}

export default SearchFormValidate
