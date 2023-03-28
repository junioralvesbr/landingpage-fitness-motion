import { motion } from 'framer-motion'
import './App.scss'

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2
    }
  }
}

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.05,
      ease: "easeInOut"
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
}

const items = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
}

const item_right = {
  initial: {
    y: 60,
    opacity: 1
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
}

function App() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className='circle'
        initial={{ y: "-100%", x: "-50%", opacity: 0 }}
        animate={{ y: "-50%", x: "-50%", opacity: 1 }}
        transition={{ duration: 1, delay: 1, type: 'spring', stiffness: 500 }}
      ></motion.div>
      <div className='model'>
        <motion.img
          src="model.png"
          alt="Modelo fitness"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 500 }}
        />
      </div>

      <motion.div className='wrapper' initial="initial" animate="animate">
        <motion.header variants={stagger}>
          <motion.div className='menu_container' variants={header}>
            <div className='menu'>
              <i className='fa fa-bars'></i>
              <span>Menu</span>
            </div>
            <div className='search'>
              <i className='fa fa-search'></i>
              <span>Search</span>
            </div>
          </motion.div>

          <motion.div className='logo-container' variants={header}>
            <span>D</span>
            <span>A</span>
          </motion.div>

          <motion.div className='cart_container' variants={header}>
            <div className='cart'>
              <span>Cart</span>
              <i className='fa fa-cart-arrow-down'></i>
            </div>

            <div className='user'>
              <span>Login</span>
              <i className='fa fa-user'></i>
            </div>
          </motion.div>
        </motion.header>

        <motion.div className='content_wrapper' initial="initial" animate="animate">
          <motion.div className='item_left' variants={stagger}>
            <motion.ul className='info'>
              <motion.li variants={items}>Cyclists</motion.li>
              <motion.li variants={items}>Runners</motion.li>
              <motion.li variants={items}>Swimmers</motion.li>
              <motion.li variants={items}>Boxer</motion.li>
            </motion.ul>

            <motion.div className='main_title'>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .3, delay: 1.7, type: "spring", stiffness: 500 }}
              >1.<span>We create for you</span></motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: -10 }}
                transition={{ duration: .6, delay: 2, type: "spring", stiffness: 500 }}
              >
                Create
              </motion.h2>
            </motion.div>

            <motion.div className='message' variants={items}>
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </motion.div>

            <motion.div className='btn_group' variants={stagger}>
              <motion.div className='btn primary' variants={items}>
                <span>Open Shop</span>
              </motion.div>

              <motion.div className='btn secondary' variants={items} animate={{ skew: "-21deg" }}>
                <span>Open Shop</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className='item_right' variants={stagger}>
            <motion.p variants={item_right}>product <span>02</span></motion.p>
            <motion.h2 variants={item_right}>way the <br />right way</motion.h2>

            <motion.div className='message' variants={item_right}>
              Lorem ipsum dolor sit
              <br />amet consectetur
              <br />adipisicing elit.
            </motion.div>

            <motion.nav className='nav' variants={item_right}>
              <span>
                <i className='fa fa-chevron-left'></i>
              </span>
              <span className='active'>
                <i className='fa fa-chevron-right'></i>
              </span>
            </motion.nav>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default App
