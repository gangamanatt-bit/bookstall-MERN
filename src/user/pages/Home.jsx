import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
    {/* hero section */}
    <div style={{height:'500px'}} className="flex flex-col justify-center items-center bg-[url('https://www.shutterstock.com/image-photo/new-york-city-ny-us-600nw-2614830577.jpg')] bg-cover bg-center text-white">
         <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.2)'}} className="w-full flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">Wonderful Gifts</h1>
          <p>Gift your family and friends a book</p>
          <div className="flex items-center mt-9">
            <input placeholder='Search a book' type="text" className="bg-white p-2 rounded-3xl w-100 text-black" />
            <FaSearch className='text-gray-500 cursor-pointer' style={{marginLeft:'-40px'}}/>
          </div>
          </div>

    </div>
    <section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
      <h1 className="text-4xl my-2">Explore Our Latest Collection</h1>
      <div className="md:grid grid-cols-4 w-full my-10">
         <div className="shadow rounded p-3 m-4 md:my-0">
           <img width={'100%'} height={'300px'} src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt="book" />
           <div className="flex flex-col justify-center items-center mt-4">
             <h2 className="text-blue-700 font-bold text-xl">author</h2>
             <h3 className="text-lg">title</h3>
             <p className="font-bold text-red-500">price</p>
           </div>
         </div>
      </div>
      <div className="text-center my-10">
        <Link to={'/books'} className='bg-black p-3 text-white font-black'>Explore More...</Link>
      </div>
    </section>
    <section className="md:grid grid-cols-2 items-center gap-10 p-5 md:px-40">
     <div className='text-center'>
        <h2 className="text-xl font-bold">FEATURED AUTHORS</h2>
        <h3 className="text-xl">Captives with Every word</h3>
        <p className="my-5 text-justify">Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
         <p className="text-justify">Our Author Features include:</p>
         <p className="text-justify my-3"><span className='font-black'>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
         <p className="text-justify my-3"><span className='font-black'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
         <p className="text-justify my-3">
  <span className='font-black'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
     </div>
   <div className="p-5 flex items-center justify-center">
    <img src="https://images.squarespace-cdn.com/content/v1/64bfd6aa127fba0754a78d65/1690617601186-7MS4W32UWBXKFKZTCQ14/authorphotos5-1024x683.jpg" alt="" />
   </div>
    </section>
    <section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">TESTIMONIALS</h1>
      <h1 className="text-xl my-2">See what others are saying</h1>
      <div className="my-5 flex flex-col justify-center items-center">
        <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIREhMSExMWFRMXFRgZFRgVFRUXFRUYFRcWFxYWFxgYHSggGB0mHRcWIjEhJikrLy4uFx8zODMtNyguLisBCgoKDg0OGxAQGy0lHyUrKy01LTUtLS0tLS0rLS8tLSstLS0tLS0tLS0tLS0tLS4tLS0tLS0tLS0tLS4tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQUDBAYCBwj/xABBEAABAwIDBAcFBgMHBQAAAAABAAIRAyEEEjEFQVFxBiJhgZGhsRMywdHwByNCUnLhM5KiFGJjgrLC8RUWFyRT/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJBEBAQEAAgIDAAMAAwEAAAAAAAECAxEEIRIxQRMicTJRoQX/2gAMAwEAAhEDEQA/APq6IiAiIgIiICkKFIQEREBERAREQFxvSb7Q8Pg3FmR9R8kQIaCRrqZiNHRB3TeLXpj0jp4DDuqOI9oQRSZeXu7twmSfmvhFP2mJrOqV3y58unfr9FR1rpPOe3fY77XHGRRwwB1aajiTExBa2JPI7/Hc2X9q4e7LVwrgJjNTeHcuo6I/mK+dVsCJvG6/CQADyMeut1bYCg24ME2zCLg7jB09D2qu7q2ccfaNj7cw+Lbmo1Gu4t0qN7HMPWb4KxXwfF4plMy4ZoMtewkPb2hwuCIN/wB19D6EdJXVC2jUf7RrhNGoT1yQJdSfxIAzB2+43Xlnff2hvj69x2qIisVCIiAiIghFKIIREQEREBERAREQEREBERAREQFKhSgIiICIiAiIg+UfapSNXGUml3Vp02lrR+dznX8I8FrYToiHBsOObjHHW3BOlFadpVc34XgD+RgA8/NdXsd1gsXNu/Lp6Hj4nx7c5/2RWJmWnmLXWf8A8f1i4E1BIEEgQY4TqRzXfUHGFnDioS1Oyf8AT587oAA3rOk/UKpFE7NxFEuJdRDxUlsTLdQZtvC+o17hcb0uotdTvrNu8ELk1Zp3WZrNd3s7HMr021aZlrhbjwIPetlcv9nFFzcEJ/O6LzYQ0R4LqF6EvceZZ1RERdcEREBERAUKUQQiIgIiICIiAiIgIiICIiCQiIgIiICIiAiKHOABJ0Ak9yD5B0tpD/qNR1i12V7SCCCMobqODmuHMFWuzukVCmOs644CR4rnsRSL3tF2i4JI94S0G/K09i3qnRdzpu/KRb2cAg8bm6w661e69LGdYnxjtdmdIaFUjI8E8N/grLFbSp0gS8hoiZK+bO2AcO+i9he052gyRoAS5xAtcAiy6TpXsp1d1GmHuyljjx6wiJkzpOi5/iXV/VvT6SYV/u1Ae0AkeIC5zpRXa5udrpAIIIMggmDoqgdFajXHI+RaGuY7MNJl+h/dbmN2Y+nkbIDbOqAguPAZTNu8GY3Llk7PfV9O86JsIwlGRBcC47vfcXA+BCt1TdFyDSMGWyMomYGRgA8vGVcrdi95ledyZ+OrBERSQEREBERAREQFClQgIiICIiAiIgIiICIpCAiIgIiICIiAoc0EEHQ2PepRB8g6QsNLE+zMw0vDc28SIPfK6PZGNeQAADz+JT7WSW08K/hVc2f1MmP6PJUWydthrCQJOgAvJ+XyWLkz8b6elw8vyndXu08QxlVpr1GtJs0aNvqBPIKz2jjaDjSYKzRVMGncSS3UDjYkd64Pa2KGLIziqSP/AJ0nW7JhZ9kvbQLKn3nVdOZ2Hq5YiLkiQQodNExq++vT6A+u6PdHObeEfFUeKxOSrTPvEuE21i8AcNVmo9IadcOykZmi+XQ7pCrdl1mVsdRpkSOuXDlTcRKSXV6VXUzO3c7JohtMQAAbiBFt3z71uqAIsFK35nU6eZrV1e6IiLqIiIgIiICIiAoUqEBERAREQEREBERAUqFKAiIgIiICIiAiIg537QcCK2ArjewCo08Cwg+YzDkSvhuDxj6b4M63HLs71+gukjM2ExA/wX/6Svhu1tnZo/NuOk9hVPJZ31V/Fm3PcdRh9q+1ZLQQ8C0W9Ny3NlY+qBNdzjE6uBHG0QuDwm0n0LOaQeWscO9Zq/SAu6tzMk8bncPDwVP8d/GqeR1PdWm3ekBNRxpmAYkixtF/C3cut+yrZrnGrjH6fw6Y33hz39/VA71wOxtkurOzvEMmYPx87dq+y9CaYbhRH53fAfBWcczNdRRyXVz8qvkRFoZRERAREQEREBERAUKVCAiIgIiICIiAiIgKVClAREQEREBERARauJ2gynYkk8BeOe4LmdsbRqVC6C5jRADQSL63jXUKWc2oa3Iren+0XVWwwn2VOpTmNHHO0F3aBu7yudxmFztkK7rYpoDKIZ7R9awYNzPxvdyG4XJ7yNGrhHUKgY67T7p4j4HsWfysWdWNfhbllzftR1MKXAhwUYPYwB0k8l0j6F9FvYOkOCyfJt+EamGweRoEQveyquJdXY2nVeyjTLnPAPVM6NI4l3lmW3VIM3DWjUkgDvJsOavMBs9tJgaLyZcfzE/DgtHi5t33+Mvm6zMfH9XmCxHtGB2h0I4Ea/Xas6ocPWNN8i4JII4wCZ8lb0cW13YeBWzWemHG5WdERQTEREBERAREQFBUqCgIiICIiAiIgIiIAUoiAiIgLxVqtaJcQOfw4pWqhjS46D6hUr6xqGTvmOyDEeqlJ2jrXTeq7TaPdBd5BaWIxdV9gcv6d3fqmWfX5r0RAneY8pPwVkzIpu7WoKY7p8m6laeIon2YdGpDjabFwOm+yta9KRl7A3uPveUqMaBl7JbPLMJ8lNW5irs5ragqsflqCRSeeqCMzi5sHQidDx7FfbJwTcS0ivSlzTYk2Mzdr2mT39iV8DTINItBZALRFm7jHD91j2RskYapmDqmUxLHXaW7ze9tZ7FHkzLnpPj1c77i4f0Xou/O3k4fEFYh0Xa33aju9oPoQraiS1xpk/pPELYbM6rD/Fi/j0Jzbn65TFYBtEmnmuYl0CTmFwBfcqfY9R2Fc7Dva/8As+tGpBcGDfTeR7gG4m0WtAnqOkznMdSqNiC4Mfa+VxgOB4gnvE81hZUv2wJ7539xWzi6meoxc11dd6YcQR7SkGkEdaNfyOPfvutg0pF+5ae0KWX70E2qMceAFmujhYlWT9w+t6mrYqbqjNHSOBuP2WyzaF+s2BxFx4LG0rxVZNvreo3MqU1YtAZupVPs/EZHZNWk2/un5K4VVnS7Ou4IiLiQiIgKCpUFAREQEREBERARFIQEREBERBUbbxAkM4APdyzAD/d4LRDogb/vAOYIe3xAWptLG5cY5zv4ceyd2Aix/mHmsrGkONMmJh1N3B7bxyI8pV2Z6Z93ut6pUDcrvwmJ5OtPcYPJZW6wdw9T+y1aTRkLHaXEcJ1b8u5Y8HXz3OswebeqfMFSRbzNT9fW/wAVh2n/AA3/AKfReqDurO/fzU4kSx44tIRx5xeodzHjB+Cz4KqXPYCZEgdywVjLfD4Lzs5/3jN3WHqlnozfboHsvTO8SPALYYLLE67m8ifRZHFZG1XbeH3TjwEjuuq1uh71c7SbLHTwVHQ03q7i/VPN+MuIGam8cQVkm45LyDIaO8qarovwVqh5pVeqT2n1IAXpt9frd8FqMfDWDsn67z5LM2oY4nRo4o72VzExu9Tp5K3w78zQe48wqos0brvPM/RW1surOcbpt4kfBQ3PSfHfbfREVS8REQFBUqCgIiICIiAiIgIiIJREQERAg47aFIe3IcOq+x/zSPUDxWFrHMPsHnT+E89lwCexe6VT+00nH8bXO5xmJB8I8CrCgxuJpAO18wQr4y37RhMSHyHCHizgdf34gqvwv3eIdTB6oLj3OJcPXyWd2FJIY4xUb7j+I/K7iPRaeIfGIw5dZzg+m4cYII8Ot/MFKOLXZtWafeT4klbDqlo7FUbHqfdtnXQ9ysAUHtzur9cVnw1JzatMOEEwdQd/YtR7oHh6rNspwNVgvbjNgAbCdBbRc19O5+3SM9/k0eZ/ZSTdRR953cPKfijxdZGxhx3uO5FczRdzNzyEBdRjB1HciuZw5InTXj+yu4v1TzfjxiqjoIBjqzIiZHMLDhMRUexwqOBBETEEd6y1Wze3undIsP3Kw7Pwnsx70yATbLEie9Xs7K+pL40tfsAut9gi8dY6DgPrVVeyZqvL/wAIs3gYOvJXOWNLu3nguV1iqS0QLvO/hxPyWXYjus8fhsG/5SQ4+JjuWN7YsNTvWxgoY5g4gtHhm/2qGvpPH2skRFS0CIiAoKlQgIiICIiAiIgIiIJRQpQFjxD4Y48Gk+AJWRam1nRQqn/Dd5ghByOzWGn127iQ4cQCrXC9V5I91+hHHgeB9VWM2lSpveLkWLgBEHKJ1WfBbSDhIaIO7N+2q7efjnq1yeLy69yM2P2kBiG0yPwEjtM7uXxWnttoqMZWZ79J4cRvgSHzyaXEHeARutqdJaQrhppksrMPUcRIg6tdF4+SnBe0iKgGaIJbcO9PRUXyZjfcvcrVPEu+LqzrUbdGAagGgeSOR6w9QtmjWkxvVZTa5rzMwWtE9rWtaT/TK9Yar94zvC253NTuPO3x6xetRZYh4ETxW/sVs1AeAPpHxVZUqAloInXu0VtsFjc8gRb69F3f/FHHvUXlN8F53Zh6BZqguCsVNstqdp+AU4arLRxCyNjxjfcdyK5ejvMDXt9Suox3uO5FcjRqi+tyY3jXcJkK/i/VHN+PGKqA5Wb3GB4AnyBU7exQp0nHsyjmbALBg2l2Jc4k5aYIvxI+Q/qVbt9zcRUpszQ1j21HQPymWjskgz2TxlT5NzE7qHFx3k11HR4Asw9FgcYJHeSdbLeNdotI0nUaWufELnXfeGc1hcuIue86Ba2Jdmg0aeYaZ3EhvOTc9ywa8u99yenqZ8DPx6t9urbG4yV5rvygO/K5p7pg+RKq8HiyHM9pVBe7qtYN07536Srau3M0jiDC1cfJ/Jnth5+H+LXS2Ra2zquekw9kHmLH0WyopCIiAoUqEBERAREQEREBERAUqEQSqbpXtBtGg7Nq6wHe2T5jxVyuW+0RrThgXUy9odqJlhIsSRoCfh2KO7ZO4nxyXUlcOMJTe8PfWecxuAQ0DgCbk+S3HbLw+7EVWfpqsP8AqaVR4fF4OmWkU2zN87nP5QHuIVlT2zgDf2VKeIptHoFhsr1ZZ19/+rjAFjeqC50fieQS7ttbwCs4VXhKzSRlAAjq2j1W9TqnQxPYbH5KpZXusJF/HgtXB4Oq+qHsGZgJkyBBI0vr3cVnc7VX2DpCmxrYiNdNTr5rX4fy+V6+mDzrn4Tue1U/DVabmvNEVR1gWh12kxDu3TdOvYrbo4w5jIItvBB817L1jZUMtIJBJ5aD/hejr3Hk5/rXRUXRn/V8AsFCznBVb626Z4mbrA3FvY8dYwVV/HVv8sW22a2Wk89keNlyNFrS0Oc4/ijqneQeW7irzabi9ha69s1rHiI8PJVWD2eMsGu4hwsQGgE98wVZxz4xXya+VjRq4xtKm8731HZDaSZywP5fJaGFoQC5x94y4/DkNFf1dhYdz2ueHOLfdl7gAetJIbF+s7xW/Ro0me6xo7vmqefj3yXqX00+NzY4p313XLvrnU6bm/txW3TxLiQHAkWORsunnH/CvPY0g6TTZO45Wz23hZSW7gAewQSqJ4d791pv/wBCdesqfZ9aj7Z0im2sR1WwQ8DcLgcN3nCsqlZwB00laWLaCRTrAOYT93U/E124E7jwcNeeu0Pch1yBc8Y3962zMzOo83W7vVtbvRuoXUb65nfA/FWiqujI+4H6nfJWqqv2vz9CIi46hERAREQEREBERAREQEREBV3SWkHYWsD+Sb/3SHfBQiD5nRrVahJp4Zrg4nKB7MARa2Y2VmHY6k2XUDlAvFSn6ZkRQnj4v2svmck+ulK7pFLoILSNRrrfce1WOF2g1/0URZeTjmb6buHl1ue207Ghj6ZJOXOJ10HW4HgrhnSTDmAZE/3T8FCLV4k/rf8AWHz7/ef42/7bSIkO10s4fBYX18xyNuRqTaJv8tAiLWwtnDtymFG1RLe3UHgURHE7PxvtAC4dcCD2iVqYrD1KbnOoEX96m+7HdvYVCIPGE2+1zhSqMNN+gg5m8pG5WNSpBg2KIujG90iOOkag8QvGGxJMg6tMO+BHYeCIuOstQCo0tOhEfutU1TlAJOhB7YBREF/0eH/rs7cx8XuViiKi/bTPoUIi46IiICIiCEREH//Z" alt="" />
        <h3 className='my-3'>Luthur King</h3>
        <p className="text-justify">This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home
