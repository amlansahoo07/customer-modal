import React from 'react'
import UpdateCustomer from '../containers/customer-operations/UpdateCustomer'


export const Update=()=> {
    
    return( 
       <>
     
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
  Update Customer
</button>


<div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateModalLabel">Update Customer</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <UpdateCustomer />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
       </>
    )
    
}

export default Update;